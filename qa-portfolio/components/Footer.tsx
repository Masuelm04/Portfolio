"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        border-t border-slate-200
        bg-white
        px-4 py-8
        text-slate-700
        transition-colors duration-300

        sm:px-6
        lg:px-8

        dark:border-slate-800
        dark:bg-[#020817]
        dark:text-slate-300
      "
    >
      <div
        className="
          mx-auto flex max-w-7xl
          flex-col gap-6

          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">
            Masuel Matos
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {t.role}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/masuelmatos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              transition-colors
              hover:text-blue-600
              focus-visible:text-blue-600

              dark:hover:text-blue-400
              dark:focus-visible:text-blue-400
            "
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://github.com/Masuelm04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              transition-colors
              hover:text-blue-600
              focus-visible:text-blue-600

              dark:hover:text-blue-400
              dark:focus-visible:text-blue-400
            "
          >
            <FaGithub size={20} />
          </a>

          <a
            href="mailto:masuelm04@gmail.com"
            aria-label="Email"
            className="
              transition-colors
              hover:text-blue-600
              focus-visible:text-blue-600

              dark:hover:text-blue-400
              dark:focus-visible:text-blue-400
            "
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {currentYear} Masuel Matos. {t.rights}
        </p>
      </div>
    </footer>
  );
}