"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const categories = [
    {
      icon: "⚙️",
      ...t.categories.automation,
    },
    {
      icon: "💻",
      ...t.categories.programming,
    },
    {
      icon: "🛡️",
      ...t.categories.testing,
    },
    {
      icon: "🔗",
      ...t.categories.apis,
    },
    {
      icon: "🗄️",
      ...t.categories.databases,
    },
    {
      icon: "🛠️",
      ...t.categories.engineering,
    },
  ];

  return (
    <section
      id="skills"
      className="
        px-6 py-24
        bg-white
        text-slate-900
        transition-colors duration-300

        dark:bg-[#0f172a]
        dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            {t.eyebrow}
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            {t.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <SkillCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: string;
  title: string;
  items: string[];
}) {
  return (
    <article
      className="
        rounded-2xl
        border border-slate-200
        bg-slate-50/80
        p-6
        shadow-sm
        transition duration-300

        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-lg

        dark:border-slate-700
        dark:bg-[#020817]
        dark:hover:border-blue-500/60
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-xl
            bg-blue-100
            text-xl

            dark:bg-blue-500/10
          "
        >
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-100">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
          >
            <span className="mt-1 text-blue-600 dark:text-blue-400">
              ▸
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}