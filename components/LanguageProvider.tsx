"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  ReactNode,
} from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

const LANGUAGE_KEY = "language";
const LANGUAGE_EVENT = "languagechange";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
}

function getSnapshot(): Language {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

  if (savedLanguage === "es") {
    return "es";
  }

  return "en";
}

function getServerSnapshot(): Language {
  return "en";
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLanguage = (newLanguage: Language) => {
    localStorage.setItem(
      LANGUAGE_KEY,
      newLanguage
    );

    document.documentElement.lang =
      newLanguage;

    window.dispatchEvent(
      new Event(LANGUAGE_EVENT)
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}