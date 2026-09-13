"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Navbar() {
  const { language } = useLanguage();

  const t = translations[language].navbar;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold">
          Masuel Matos
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#home">{t.home}</a>
          <a href="#about">{t.about}</a>
          <a href="#skills">{t.skills}</a>
          <a href="#projects">
            {t.projects}
          </a>
          <a href="#certifications">
            {t.certifications}
          </a>
          <a href="#contact">
            {t.contact}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}