import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import {en,fr,tel} from "./locales";
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,fr,tel
        },
        fallbackLng: "en",
        debug: true,
        ns:["translations"],
        defaultNS: "translations",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;