"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={
          language === "en"
            ? "cursor-pointer font-bold text-blue-600"
            : "cursor-pointer text-gray-500 dark:text-gray-400"
        }
      >
        EN
      </button>

      <span className="mx-2 text-gray-400">
        |
      </span>

      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={
          language === "es"
            ? "cursor-pointer font-bold text-blue-600"
            : "cursor-pointer text-gray-500 dark:text-gray-400"
            
        }
      >
        ES
      </button>
    </div>
  );
}