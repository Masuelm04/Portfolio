"use client";

import { projects } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section
      id="projects"
      className="
        bg-slate-50
        px-4 py-20
        text-slate-900
        transition-colors duration-300

        sm:px-6 sm:py-24
        lg:px-8

        dark:bg-[#0b1220]
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

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const content = t.items[project.id];

            return (
              <ProjectCard
                key={project.id}
                title={content.title}
                description={content.description}
                highlights={content.highlights}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                featured={project.featured}
                practice={project.practice}
                featuredLabel={t.featured}
                practiceLabel={t.practice}
                githubLabel={t.githubButton}
                highlightsTitle={t.highlightsTitle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  highlights,
  technologies,
  githubUrl,
  featured,
  practice,
  featuredLabel,
  practiceLabel,
  githubLabel,
  highlightsTitle,
}: {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
  practice?: boolean;
  featuredLabel: string;
  practiceLabel: string;
  githubLabel: string;
  highlightsTitle: string;
}) {
  return (
    <article
      className={`
        relative flex h-full flex-col
        rounded-2xl
        border
        bg-white
        p-7
        shadow-sm
        transition duration-300

        hover:-translate-y-1
        hover:shadow-xl

        dark:bg-[#020817]

        ${
          featured
            ? "border-blue-300 dark:border-blue-500/60"
            : "border-slate-200 dark:border-slate-700"
        }
      `}
    >
      <div className="mb-5 flex flex-wrap gap-2">
        {featured && (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            ★ {featuredLabel}
          </span>
        )}

        {practice && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            🧪 {practiceLabel}
          </span>
        )}
      </div>

      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
          {highlightsTitle}
        </p>

        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="
                rounded-lg
                border border-slate-200
                bg-slate-50
                px-3 py-1.5
                text-xs
                text-slate-600

                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
              "
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              bg-blue-50
              px-3 py-1
              text-xs font-medium
              text-blue-700

              dark:bg-blue-500/10
              dark:text-blue-300
            "
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <a
          href={githubUrl || "#"}
          target={githubUrl ? "_blank" : undefined}
          rel={githubUrl ? "noreferrer" : undefined}
          className="
            inline-flex items-center gap-2
            rounded-lg
            bg-slate-950
            px-5 py-3
            text-sm font-semibold
            text-white
            transition

            hover:bg-blue-600

            dark:bg-blue-600
            dark:hover:bg-blue-500
          "
        >
          {githubLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}