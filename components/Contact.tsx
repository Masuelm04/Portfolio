"use client";

import type { FormEvent, ReactNode } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Contact form submitted");
  };

  return (
    <section
      id="contact"
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

        {/* Contact Grid */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="space-y-6">
            <ContactCard
              icon={<Mail size={22} />}
              label={t.emailLabel}
              value="masuelm04@gmail.com"
              href="mailto:masuelm04@gmail.com"
            />

            <ContactCard
              icon={<FaLinkedin size={22} />}
              label={t.linkedinLabel}
              value="linkedin.com/in/masuelmatos"
              href="https://www.linkedin.com/in/masuelmatos"
            />

            <ContactCard
              icon={<FaGithub size={22} />}
              label={t.githubLabel}
              value="Masuelm04"
              href="https://github.com/Masuelm04"
            />

            <ContactCard
              icon={<MapPin size={22} />}
              label={t.locationLabel}
              value={t.locationValue}
            />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-7
              shadow-sm

              dark:border-slate-700
              dark:bg-[#020817]
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-slate-950

                dark:text-white
              "
            >
              {t.form.title}
            </h3>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <FormField
                label={t.form.name}
                name="name"
                type="text"
                placeholder={t.form.namePlaceholder}
              />

              <FormField
                label={t.form.email}
                name="email"
                type="email"
                placeholder={t.form.emailPlaceholder}
              />
            </div>

            <div className="mt-5">
              <FormField
                label={t.form.subject}
                name="subject"
                type="text"
                placeholder={t.form.subjectPlaceholder}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-slate-900

                  dark:text-slate-100
                "
              >
                {t.form.message}
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={t.form.messagePlaceholder}
                className="
                  w-full
                  rounded-xl
                  border border-slate-300
                  bg-white
                  px-4 py-3
                  text-slate-900
                  outline-none
                  transition

                  placeholder:text-slate-400

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-500/20

                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            <button
              type="submit"
              className="
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                px-6 py-3
                font-semibold
                text-white
                transition

                hover:bg-blue-700

                dark:hover:bg-blue-500
              "
            >
              {t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
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
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-11
            w-11
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

        <div className="min-w-0">
          <p
            className="
              text-sm
              text-slate-500

              dark:text-slate-400
            "
          >
            {label}
          </p>

          <p
            className="
              mt-1
              break-words
              font-semibold
              text-slate-950

              dark:text-slate-100
            "
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-900

          dark:text-slate-100
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border border-slate-300
          bg-white
          px-4 py-3
          text-slate-900
          outline-none
          transition

          placeholder:text-slate-400

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20

          dark:border-slate-700
          dark:bg-slate-950
          dark:text-white
          dark:placeholder:text-slate-500
        "
      />
    </div>
  );
}