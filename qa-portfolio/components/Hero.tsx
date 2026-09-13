"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="min-h-screen bg-white px-6 py-24 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {t.eyebrow}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {t.projectsButton}
            </a>

            <a
              href={
                language === "es"
                  ? "/cv/cv-es.pdf"
                  : "/cv/cv-en.pdf"
              }
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
              download
            >
              {t.cvButton}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/masuelmatos/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-600"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Masuelm04"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-600"
            >
              GitHub
            </a>

            <a
              href="mailto:masuelm04@gmail.com"
              className="transition hover:text-blue-600"
            >
              Email
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-center shadow-xl">
            <span className="px-8 text-lg text-gray-500 dark:text-gray-400">
              Your professional photo
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 border-t border-gray-200 pt-8 dark:border-gray-800 sm:grid-cols-3">
        <div>
          <p className="text-2xl font-bold">3+</p>
          <p className="text-gray-600 dark:text-gray-400">
            {t.projectsStat}
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">
            Playwright · Python · Pytest
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {t.technologiesStat}
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold">
            Web · API · Functional
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {t.focusStat}
          </p>
        </div>
      </div>
    </section>
  );
}