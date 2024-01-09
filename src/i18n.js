<<<<<<< HEAD
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('../public/locales/en.json')
  },
  zh: {
    translation: require('../public/locales/zh.json')
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
=======
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('../public/locales/en.json')
  },
  zh: {
    translation: require('../public/locales/zh.json')
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
>>>>>>> acbbb6be9ebab94b5a3e7f2d2b866ca5577bc66f
