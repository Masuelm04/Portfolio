"use client";

import type { ReactNode } from "react";

import {
  Brain,
  Puzzle,
  Users,
  BookOpen,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Rocket,
} from "lucide-react";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="
        bg-slate-50
        px-6 py-24
        text-slate-900
        transition-colors duration-300

        dark:bg-[#0f172a]
        dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
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
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Left Column */}
          <div>
            <div
              className="
                space-y-6
                text-lg
                leading-8
                text-slate-600

                dark:text-slate-300
              "
            >
              <p>{t.paragraph1}</p>

              <p>{t.paragraph2}</p>

              <p>{t.paragraph3}</p>
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<MapPin size={20} />}
                label={t.location}
              />

              <InfoCard
                icon={<BriefcaseBusiness size={20} />}
                label={t.role}
              />

              <InfoCard
                icon={<GraduationCap size={20} />}
                label={t.education}
              />

              <InfoCard
                icon={<Rocket size={20} />}
                label={t.availability}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <StrengthCard
              icon={<Brain size={24} />}
              title={t.strengths.analytical.title}
              description={t.strengths.analytical.description}
            />

            <StrengthCard
              icon={<Puzzle size={24} />}
              title={t.strengths.problemSolver.title}
              description={t.strengths.problemSolver.description}
            />

            <StrengthCard
              icon={<Users size={24} />}
              title={t.strengths.teamPlayer.title}
              description={t.strengths.teamPlayer.description}
            />

            <StrengthCard
              icon={<BookOpen size={24} />}
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
  icon: ReactNode;
  label: string;
}) {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition duration-300

        hover:-translate-y-0.5
        hover:border-blue-300
        hover:shadow-md

        dark:border-slate-700
        dark:bg-[#020817]
        dark:hover:border-blue-500/60
      "
    >
      <div
        className="
          flex h-10 w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-blue-50
          text-blue-600

          dark:bg-blue-500/10
          dark:text-blue-400
        "
      >
        {icon}
      </div>

      <span
        className="
          font-medium
          text-slate-900

          dark:text-slate-100
        "
      >
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
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article
      className="
        rounded-2xl
        border border-slate-200
        bg-white
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
      <div
        className="
          mb-5
          flex h-12 w-12
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
          text-lg
          font-semibold
          text-slate-950

          dark:text-slate-100
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-slate-600

          dark:text-slate-400
        "
      >
        {description}
      </p>
    </article>
  );
}