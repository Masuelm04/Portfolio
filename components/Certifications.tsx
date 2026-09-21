"use client";

import Image from "next/image";

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  GraduationCap,
  Zap,
} from "lucide-react";

import { certifications } from "@/data/certifications";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Certifications() {
  const { language } = useLanguage();
  const t = translations[language].certifications;

  return (
    <section
      id="certifications"
      className="
        bg-slate-50
        text-slate-900
        transition-colors duration-300

        dark:bg-[#08111f]
        dark:text-slate-100
      "
    >
      {/* Hero Header */}
      <div
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-blue-50
          via-white
          to-slate-100
          px-4 py-16
          transition-colors duration-300

          sm:px-6
          sm:py-20

          lg:px-8

          dark:from-[#07152f]
          dark:via-[#0a1d40]
          dark:to-[#0d2b61]
        "
      >

        {/* Decorative glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-24
            h-80
            w-80
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-blue-200
                bg-blue-50
                px-4 py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-blue-700

                dark:border-blue-400/30
                dark:bg-blue-400/10
                dark:text-blue-200
              "
            >
              <GraduationCap size={16} />
              {t.eyebrow}
            </div>

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-slate-950

                sm:text-5xl
                lg:text-6xl

                dark:text-white
              "
            >
              {t.title}
            </h2>

            <p
              className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-slate-600

                dark:text-blue-100/90
              "
            >
              {t.description}
            </p>

            {/* Mini indicators */}
            <div
              className="
                mt-10
                grid
                gap-5

                sm:grid-cols-3
              "
            >
              <GrowthItem
                icon={<BarChart3 size={20} />}
                title={t.skillsTitle}
                subtitle={t.skillsSubtitle}
              />

              <GrowthItem
                icon={<Zap size={20} />}
                title={t.technologyTitle}
                subtitle={t.technologySubtitle}
              />

              <GrowthItem
                icon={<BriefcaseBusiness size={20} />}
                title={t.futureTitle}
                subtitle={t.futureSubtitle}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certification Cards */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-4 py-12

          sm:px-6
          sm:py-16

          lg:px-8
        "
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((certification) => {
            const content =
              t.items[certification.id];

            return (
              <CertificationCard
                key={certification.id}
                title={content.title}
                description={content.description}
                provider={certification.provider}
                date={certification.date}
                status={certification.status}
                certificateUrl={
                  certification.certificateUrl
                }
                image={certification.image}
                completedLabel={t.completed}
                inProgressLabel={t.inProgress}
                viewCertificateLabel={
                  t.viewCertificate
                }
                viewProgressLabel={
                  t.viewProgress
                }
                viewDetailsLabel={t.viewDetails}
              />
            );
          })}
        </div>

        {/* Closing quote */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-2xl
            border border-slate-200
            bg-white
            px-6 py-5
            shadow-sm

            sm:flex-row
            sm:items-center
            sm:justify-between

            dark:border-slate-700
            dark:bg-[#020817]
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex h-11 w-11
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
              <BookOpen size={21} />
            </div>

            <p
              className="
                font-medium
                italic
                text-slate-700

                dark:text-slate-200
              "
            >
              “{t.quote}”
            </p>
          </div>

          <div
            className="
              flex items-center
              gap-3
              text-xs
              font-semibold
              tracking-wide
              text-slate-500

              dark:text-slate-400
            "
          >
            <span>{t.continueLearning}</span>
            <ArrowRight
              size={16}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-xl
        border border-slate-200
        bg-white/80
        p-4
        shadow-sm
        backdrop-blur-sm
        transition-colors duration-300

        dark:border-white/10
        dark:bg-white/5
      "
    >
      <div
        className="
          flex h-11 w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border border-blue-200
          bg-blue-50
          text-blue-600

          dark:border-blue-400/30
          dark:bg-blue-400/10
          dark:text-blue-300
        "
      >
        {icon}
      </div>

      <div>
        <p className="font-semibold text-slate-950 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-500 dark:text-blue-100/70">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function CertificationCard({
  title,
  description,
  provider,
  date,
  status,
  certificateUrl,
  detailsUrl,
  image,
  completedLabel,
  inProgressLabel,
  viewCertificateLabel,
  viewProgressLabel,
  viewDetailsLabel,
}: {
  title: string;
  description: string;
  provider: string;
  date?: string;
  status: "completed" | "inProgress";
  certificateUrl?: string;
  detailsUrl?: string;
  image: string;
  completedLabel: string;
  inProgressLabel: string;
  viewCertificateLabel: string;
  viewProgressLabel: string;
  viewDetailsLabel: string;
}) {
  const isCompleted =
    status === "completed";

  return (
    <article
      className="
        grid
        gap-6
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition duration-300

        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-xl

        sm:grid-cols-[180px_1fr]

        dark:border-slate-700
        dark:bg-[#020817]
        dark:hover:border-blue-500/60
      "
    >
      {/* Certificate visual */}
      <div
        className="
          relative
          min-h-[180px]
          overflow-hidden
          rounded-xl
          bg-slate-100

          dark:bg-slate-900
        "
      >
        <Image
          src={image}
          alt={`${title} certificate`}
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>

      {/* Main content */}
      <div className="flex min-w-0 flex-col">
        <div
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-sm
                font-semibold
                text-blue-600

                dark:text-blue-400
              "
            >
              {provider}
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-bold
                leading-7
                text-slate-950

                dark:text-white
              "
            >
              {title}
            </h3>
          </div>

          <StatusBadge
            completed={isCompleted}
            completedLabel={completedLabel}
            inProgressLabel={
              inProgressLabel
            }
          />
        </div>

        <p
          className="
            mt-3
            leading-7
            text-slate-600

            dark:text-slate-300
          "
        >
          {description}
        </p>

        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            text-sm
            text-slate-500

            dark:text-slate-400
          "
        >
          {isCompleted ? (
            <CalendarDays size={16} />
          ) : (
            <Clock3 size={16} />
          )}

          <span>
            {date ??
              (isCompleted
                ? completedLabel
                : inProgressLabel)}
          </span>
        </div>

        {/* Actions */}
        <div
          className="
            mt-auto
            flex
            flex-wrap
            items-center
            gap-4
            pt-6
          "
        >
          {isCompleted &&
          certificateUrl ? (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                px-5 py-3
                text-sm
                font-semibold
                text-white
                transition

                hover:bg-blue-700

                dark:hover:bg-blue-500
              "
            >
              {viewCertificateLabel}

              <ExternalLink
                size={15}
                aria-hidden="true"
              />
            </a>
          ) : (
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                px-5 py-3
                text-sm
                font-semibold
                text-white
              "
            >
              {viewProgressLabel}

              <ExternalLink
                size={15}
                aria-hidden="true"
              />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function StatusBadge({
  completed,
  completedLabel,
  inProgressLabel,
}: {
  completed: boolean;
  completedLabel: string;
  inProgressLabel: string;
}) {
  return (
    <span
      className={`
        inline-flex
        w-fit
        shrink-0
        items-center
        gap-1.5
        rounded-full
        px-3 py-1.5
        text-xs
        font-semibold

        ${
          completed
            ? `
              bg-emerald-100
              text-emerald-700

              dark:bg-emerald-500/10
              dark:text-emerald-300
            `
            : `
              bg-amber-100
              text-amber-700

              dark:bg-amber-500/10
              dark:text-amber-300
            `
        }
      `}
    >
      {completed ? (
        <CheckCircle2 size={14} />
      ) : (
        <Clock3 size={14} />
      )}

      {completed
        ? completedLabel
        : inProgressLabel}
    </span>
  );
}