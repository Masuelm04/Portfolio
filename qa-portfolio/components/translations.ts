import en from "@/locales/en.json";
import es from "@/locales/es.json";

export const translations = {
  en,
  es,
};

export type TranslationLanguage =
  keyof typeof translations;