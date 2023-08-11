import React from 'react';
import styles from './CreateBadgePage.module.scss';
import CreateBadgeForm, { createBadgeFormData } from '../createBadgeForm/CreateBadgeForm';

function buildURL(formData: createBadgeFormData): string{
    return `http://badges.frozenassassine.de/badge?birthdate=${formData.birthdate}
        &textcolor=${formData.textColor.replace("#", "")}
        &fontsize=${formData.fontSize}
        &fontfamily=${formData.fontFamily} 
        &prefix=${formData.prefix}
        &suffix=${formData.suffix}`;
}

const CreateBadges: React.FC = () => {
    const handleSubmit = (formData: createBadgeFormData) => {
        const url = buildURL(formData);
        navigator.clipboard.writeText(url);
        console.log(url);
    };
  
    return (
      <div className={styles.createBadgePage}>
        <div className={styles.headline}>Live Age Badges Creator</div>
        <CreateBadgeForm onSubmit={handleSubmit} />
      </div>
    );
  };
  
  export default CreateBadges;