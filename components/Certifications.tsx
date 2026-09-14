"use client";

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
        bg-white
        px-4 py-20
        text-slate-900
        transition-colors duration-300

        sm:px-6 sm:py-24
        lg:px-8

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

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => {
            const content = t.items[certification.id];

            return (
              <CertificationCard
                key={certification.id}
                title={content.title}
                description={content.description}
                provider={certification.provider}
                date={certification.date}
                status={certification.status}
                certificateUrl={certification.certificateUrl}
                completedLabel={t.completed}
                inProgressLabel={t.inProgress}
                viewCertificateLabel={t.viewCertificate}
                viewDetailsLabel={t.viewDetails}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  title,
  description,
  provider,
  date,
  status,
  certificateUrl,
  completedLabel,
  inProgressLabel,
  viewCertificateLabel,
  viewDetailsLabel,
}: {
  title: string;
  description: string;
  provider: string;
  date?: string;
  status: "completed" | "inProgress";
  certificateUrl?: string;
  completedLabel: string;
  inProgressLabel: string;
  viewCertificateLabel: string;
  viewDetailsLabel: string;
}) {
  const isCompleted = status === "completed";

  return (
    <article
      className="
        flex h-full flex-col
        rounded-2xl
        border border-slate-200
        bg-slate-50/80
        p-7
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {provider}
          </p>

          <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
            {title}
          </h3>
        </div>

        <span
          className={`
            shrink-0 rounded-full px-3 py-1
            text-xs font-semibold

            ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                : "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300"
            }
          `}
        >
          {isCompleted ? completedLabel : inProgressLabel}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {date && (
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          {date}
        </p>
      )}

      <div className="mt-auto pt-7">
        {isCompleted && certificateUrl ? (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-lg
              bg-blue-600
              px-5 py-3
              text-sm font-semibold
              text-white
              transition
              hover:bg-blue-700

              dark:hover:bg-blue-500
            "
          >
            {viewCertificateLabel}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span
            className="
              inline-flex items-center
              rounded-lg
              border border-slate-300
              px-5 py-3
              text-sm font-medium
              text-slate-600

              dark:border-slate-700
              dark:text-slate-300
            "
          >
            {viewDetailsLabel}
          </span>
        )}
      </div>
    </article>
  );
}