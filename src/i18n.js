import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import EN from "./lang/en/en.json";
import DE from "./lang/de/de.json";
import RU from "./lang/ru/ru.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
  de: {
    translation: DE,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
