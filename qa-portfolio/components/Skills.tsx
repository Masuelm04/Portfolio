"use client";

import type { ReactNode } from "react";

import {
  Settings,
  Code2,
  ShieldCheck,
  Network,
  Database,
  Wrench,
} from "lucide-react";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const categories = [
    {
      icon: <Settings size={24} />,
      ...t.categories.automation,
    },
    {
      icon: <Code2 size={24} />,
      ...t.categories.programming,
    },
    {
      icon: <ShieldCheck size={24} />,
      ...t.categories.testing,
    },
    {
      icon: <Network size={24} />,
      ...t.categories.apis,
    },
    {
      icon: <Database size={24} />,
      ...t.categories.databases,
    },
    {
      icon: <Wrench size={24} />,
      ...t.categories.engineering,
    },
  ];

  return (
    <section
      id="skills"
      className="
        bg-white
        px-6 py-24
        text-slate-900
        transition-colors duration-300

        dark:bg-[#0f172a]
        dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <p
            className="
              mb-3
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

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-5xl

              dark:text-white
            "
          >
            {t.title}
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-slate-600

              dark:text-slate-300
            "
          >
            {t.description}
          </p>
        </div>

        {/* Skills Grid */}
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
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <article
      className="
        h-full
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
      {/* Card Header */}
      <div className="mb-5 flex items-center gap-4">
        <div
          className="
            flex h-12 w-12
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-blue-600

            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          {icon}
        </div>

        <h3
          className="
            text-xl
            font-semibold
            text-slate-950

            dark:text-slate-100
          "
        >
          {title}
        </h3>
      </div>

      {/* Skill List */}
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="
              flex
              items-start
              gap-3
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-300
            "
          >
            <span
              className="
                mt-[2px]
                shrink-0
                text-blue-600

                dark:text-blue-400
              "
              aria-hidden="true"
            >
              ▸
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}