"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-gradient-to-br
        from-white
        via-slate-50
        to-blue-50/60
        px-4 py-20
        text-slate-900
        transition-colors duration-300

        sm:px-6 sm:py-24
        lg:px-8

        dark:from-[#020817]
        dark:via-[#030a18]
        dark:to-[#061329]
        dark:text-slate-100
      "
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left Column */}
        <div>
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600

              dark:text-blue-400
            "
          >
            {t.eyebrow}
          </p>

          <h1
            className="
              max-w-3xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-950

              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            {t.titleStart}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t.titleHighlight}
            </span>
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-slate-600

              dark:text-slate-300
            "
          >
            {t.description}
          </p>

          {/* Main Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                rounded-lg
                bg-blue-600
                px-6 py-3
                font-semibold
                text-white
                shadow-sm
                transition

                hover:bg-blue-700
                hover:shadow-md

                dark:hover:bg-blue-500
              "
            >
              {t.projectsButton}
            </a>

            <a
              href={
                language === "es"
                  ? "/cv/cv-es.pdf"
                  : "/cv/cv-en.pdf"
              }
              download
              className="
                rounded-lg
                border border-slate-300
                bg-white
                px-6 py-3
                font-semibold
                text-slate-800
                shadow-sm
                transition

                hover:border-blue-400
                hover:bg-blue-50
                hover:text-blue-700

                dark:border-slate-700
                dark:bg-slate-900/50
                dark:text-slate-100
                dark:hover:border-blue-500
                dark:hover:bg-slate-800
                dark:hover:text-blue-400
              "
            >
              {t.cvButton}
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="https://www.linkedin.com/in/masuelmatos"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                flex items-center gap-2
                text-sm font-medium
                text-slate-600
                transition

                hover:text-blue-600

                dark:text-slate-300
                dark:hover:text-blue-400
              "
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Masuelm04"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                flex items-center gap-2
                text-sm font-medium
                text-slate-600
                transition

                hover:text-blue-600

                dark:text-slate-300
                dark:hover:text-blue-400
              "
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="mailto:masuelm04@gmail.com"
              aria-label="Email"
              className="
                flex items-center gap-2
                text-sm font-medium
                text-slate-600
                transition

                hover:text-blue-600

                dark:text-slate-300
                dark:hover:text-blue-400
              "
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* Right Column - Professional Photo */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              relative
              flex
              h-80
              w-80
              items-center
              justify-center
              rounded-full
              border border-blue-200
              bg-gradient-to-br
              from-blue-50
              to-slate-100
              p-2
              shadow-xl
              shadow-blue-100/50
              transition-colors duration-300

              sm:h-96
              sm:w-96

              dark:border-blue-500/30
              dark:from-blue-950/40
              dark:to-slate-950
              dark:shadow-blue-950/30
            "
          >
            <Image
              src="/images/profile.jpeg"
              alt="Masuel Matos - QA Engineer"
              fill
              priority
              sizes="(max-width: 768px) 320px, 384px"
              className="rounded-full object-cover p-2"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="
          mx-auto
          mt-16
          grid
          max-w-7xl
          gap-6
          border-t border-slate-200
          pt-8

          sm:grid-cols-3

          dark:border-slate-800
        "
      >
        <Stat
          value="3+"
          label={t.projectsStat}
        />

        <Stat
          value="Playwright · Python · Pytest"
          label={t.technologiesStat}
        />

        <Stat
          value="Web · API · Functional"
          label={t.focusStat}
        />
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-xl
        p-4
        transition

        hover:bg-slate-100

        dark:hover:bg-slate-900/60
      "
    >
      <p
        className="
          text-xl
          font-bold
          text-slate-950

          dark:text-white
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-sm
          text-slate-500

          dark:text-slate-400
        "
      >
        {label}
      </p>
    </div>
  );
}