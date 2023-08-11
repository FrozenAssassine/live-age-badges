import React, { useState } from "react";
import styles from "./CreateBadgeForm.module.scss"; // Import your CSS module

interface createBadgeFormData {
    birthdate: string;
    textColor: string;
    fontFamily: string;
    fontSize: number;
    suffix: string;
    prefix: string;
}

interface CreateBadgeFormProps {
    onSubmit: (data: createBadgeFormData) => void;
}

const CreateBadgeForm: React.FC<CreateBadgeFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<createBadgeFormData>({
        birthdate: "",
        textColor: "",
        fontFamily: "",
        fontSize: 12,
        suffix: "",
        prefix: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
                className={styles.input}
                type="date"
                id="birthdate"
                placeholder="Birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
            />

            <input
                className={styles.input}
                type="color"
                id="textColor"
                placeholder="Text color"
                name="textColor"
                value={formData.textColor}
                onChange={handleInputChange}
            />

            <div className={styles.sideBySide}>
                <input
                    className={styles.input}
                    type="text"
                    id="fontFamily"
                    placeholder="Font family"
                    name="fontFamily"
                    value={formData.fontFamily}
                    onChange={handleInputChange}
                />

                <input
                    className={styles.input}
                    type="number"
                    id="fontSize"
                    placeholder="Font size"
                    name="fontSize"
                    value={formData.fontSize}
                    onChange={handleInputChange}
                />
            </div>
            <input
                className={styles.input}
                type="text"
                id="suffix"
                placeholder="Suffix"
                name="suffix"
                value={formData.suffix}
                onChange={handleInputChange}
            />

            <input
                className={styles.input}
                type="text"
                id="prefix"
                placeholder="Prefix"
                name="prefix"
                value={formData.prefix}
                onChange={handleInputChange}
            />

            <button className={styles.submitButton} type="submit">
                Submit
            </button>
        </form>
    );
};

export default CreateBadgeForm;
export type { createBadgeFormData };
