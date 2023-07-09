import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import esCommon from '../i18n/es/common.json'
import enCommon from '../i18n/en/common.json'


export default {
  initialize: async function () {
    this.i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: enCommon
        },
        es: {
          common: esCommon
        },
      },
      fallbackLng: "en",
    })
  },
  i18next: i18next
};