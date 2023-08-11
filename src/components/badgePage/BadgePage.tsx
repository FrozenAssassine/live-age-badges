//http://localhost:3000/badge?birthdate=06.10.2006&textcolor=#ff0000&fontsize=48&fontfamily=Consolas

function generateAgeImage(
    textcolor_raw: string | null,
    birthdate_raw: string | null,
    fontsize_raw: string | null,
    fontfamily_raw: string | null,
    suffix: string | null,
    prefix: string | null
) : string{
    const fontsize = fontsize_raw == null ? 15 : parseInt(fontsize_raw);
    const age = calculateAge(new Date(birthdate_raw ?? ""), "America/New_York");

    console.log(fontsize_raw);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = fontsize * 2 + (fontsize * (suffix??"").length) + (fontsize * (prefix??"").length);
    canvas.height = fontsize * 1.3;
    context.font = `${fontsize}px ${fontfamily_raw ?? "Arial"}`;
    context.fillStyle = "#" + textcolor_raw ?? "ffffff";
    context.fillText((prefix??"") + age.toString() + (suffix??""), 5, fontsize);

    return canvas.toDataURL();
}

function getDateTimeByTimezone(timezone: string): number {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: timezone,
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const datePart = date.toLocaleString("en-US", options);
    return Date.parse(datePart);
}

function calculateAge(birthdate: Date, timezone: string) {
    let timeDiff = Math.abs(getDateTimeByTimezone(timezone) + 24 * 3600 * 1000 - birthdate.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
}

export default function BadgePage() {
    const searchParams = new URLSearchParams(window.location.search);
    const fontsize = searchParams.get("fontsize");
    const birthdate = searchParams.get("birthdate");
    const textcolor = searchParams.get("textcolor");
    const fontfamily = searchParams.get("fontfamily");
    const suffix = searchParams.get("suffix");
    const prefix = searchParams.get("prefix");

    if (birthdate === null) {
        return <div>No birthdate provided</div>;
    }

    //TODO: implement suffix/prefix
    const imageSrc = generateAgeImage(textcolor, birthdate, fontsize, fontfamily, suffix, prefix);

    return <img src={imageSrc} alt="Age Image" />;
}
