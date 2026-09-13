"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-24 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white">
            {t.title}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
              <p>{t.paragraph3}</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon="📍"
                label={t.location}
              />

              <InfoCard
                icon="💼"
                label={t.role}
              />

              <InfoCard
                icon="🎓"
                label={t.education}
              />

              <InfoCard
                icon="🚀"
                label={t.availability}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <StrengthCard
              icon="🧠"
              title={t.strengths.analytical.title}
              description={t.strengths.analytical.description}
            />

            <StrengthCard
              icon="🧩"
              title={t.strengths.problemSolver.title}
              description={t.strengths.problemSolver.description}
            />

            <StrengthCard
              icon="🤝"
              title={t.strengths.teamPlayer.title}
              description={t.strengths.teamPlayer.description}
            />

            <StrengthCard
              icon="📚"
              title={t.strengths.learner.title}
              description={t.strengths.learner.description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div
      className="
        flex items-center gap-3
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-sm
        transition

        dark:border-slate-700
        dark:bg-[#020817]
      "
    >
      <span className="text-xl">
        {icon}
      </span>

      <span className="font-medium text-slate-900 dark:text-slate-100">
        {label}
      </span>
    </div>
  );
}

function StrengthCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition

        hover:-translate-y-1
        hover:shadow-md

        dark:border-slate-700
        dark:bg-[#020817]
      "
    >
      <div className="mb-4 text-3xl">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}