"use client";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Navbar() {
  const { language } = useLanguage();

  const t = translations[language].navbar;

  return (
    <header className="
    fixed left-0 top-0 z-50 w-full
    border-b border-slate-200/80
    bg-white/90
    text-slate-900
    backdrop-blur-xl
    transition-colors duration-300

    dark:border-slate-800
    dark:bg-[#020817]/95
    dark:text-white
  ">
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