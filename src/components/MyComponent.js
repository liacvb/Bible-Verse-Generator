// src/components/MyComponent.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('generate')}</button>
      <button>{t('share')}</button>

      <div className="functionality-introduction">
        <h2>{t('featureOverview')}</h2>
        <p>{t('featureDescription')}</p>
      </div>

      {/* 其他组件内容 */}
    </div>
  );
}

export default MyComponent;
