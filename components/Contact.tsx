"use client";

import {
  FormEvent,
  ReactNode,
  useState,
} from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  Mail,
  MapPin,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div
      className="
        flex items-center gap-4
        rounded-2xl
        border border-slate-200
        bg-white
        px-5 py-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:shadow-md
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:border-blue-800
      "
    >
      <div
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl
          bg-blue-50
          text-blue-600
          dark:bg-blue-950/50
          dark:text-blue-400
        "
        aria-hidden="true"
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
            break-all
            font-medium
            text-slate-900
            dark:text-white
          "
        >
          {value}
        </p>
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
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="
        block
        rounded-2xl
        outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
        focus-visible:ring-offset-2
        dark:focus-visible:ring-offset-slate-950
      "
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const { language } = useLanguage();

  const [status, setStatus] =
    useState<Status>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  const isSpanish = language === "es";

  const content = isSpanish
    ? {
        title: "Contacto",

        intro:
          "Siempre estoy abierto a nuevas oportunidades, colaboraciones y conversaciones sobre testing de software, automatización e ingeniería de la calidad.",

        emailLabel: "Correo",
        email: "GMAIL",

        linkedinLabel: "LinkedIn",
        linkedin: "linkedin.com/in/masuelmatos",

        githubLabel: "GitHub",
        github: "Masuelm04",

        locationLabel: "Ubicación",
        location: "República Dominicana",

        formTitle: "Envíame un mensaje",

        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",

        emailFieldLabel:
          "Correo electrónico",
        emailPlaceholder: "tu@correo.com",

        subjectLabel: "Asunto",
        subjectPlaceholder:
          "¿Cómo puedo ayudarte?",

        messageLabel: "Mensaje",
        messagePlaceholder:
          "Cuéntame sobre tu oportunidad...",

        submit: "Enviar mensaje",
        sending: "Enviando...",

        success:
          "¡Mensaje enviado correctamente! Gracias por contactarme.",

        error:
          "No pudimos enviar tu mensaje. Inténtalo nuevamente.",

        validation:
          "Por favor, completa todos los campos.",

        invalidEmail:
          "Introduce un correo electrónico válido.",
      }
    : {
        title: "Contact",

        intro:
          "I am always open to new opportunities, collaborations, and conversations about software testing, automation, and quality engineering.",

        emailLabel: "Email",
        email: "GMAIL",

        linkedinLabel: "LinkedIn",
        linkedin: "linkedin.com/in/masuelmatos",

        githubLabel: "GitHub",
        github: "Masuelm04",

        locationLabel: "Location",
        location: "Dominican Republic",

        formTitle: "Send me a message",

        nameLabel: "Name",
        namePlaceholder: "Your name",

        emailFieldLabel:
          "Email address",
        emailPlaceholder: "you@email.com",

        subjectLabel: "Subject",
        subjectPlaceholder:
          "How can I help you?",

        messageLabel: "Message",
        messagePlaceholder:
          "Tell me about your opportunity...",

        submit: "Send message",
        sending: "Sending...",

        success:
          "Message sent successfully! Thank you for reaching out.",

        error:
          "We couldn't send your message. Please try again.",

        validation:
          "Please complete all fields.",

        invalidEmail:
          "Please enter a valid email address.",
      };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Evita múltiples envíos mientras se procesa la petición.
    if (status === "sending") {
      return;
    }

    setErrorMessage("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const name = String(
      formData.get("name") ?? ""
    ).trim();

    const email = String(
      formData.get("email") ?? ""
    ).trim();

    const subject = String(
      formData.get("subject") ?? ""
    ).trim();

    const message = String(
      formData.get("message") ?? ""
    ).trim();

    // Validación del formulario
    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      setStatus("error");
      setErrorMessage(content.validation);
      return;
    }

    // Validación básica del email
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage(content.invalidEmail);
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      // Intentamos obtener la respuesta de la API.
      const result = await response
        .json()
        .catch(() => null);

      // La API debe responder con success: true.
      if (
        !response.ok ||
        !result?.success
      ) {
        throw new Error(
          result?.message ||
            "Request failed"
        );
      }

      // Éxito
      setStatus("success");

      // Limpiamos el formulario
      form.reset();
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus("error");

      setErrorMessage(
        content.error
      );
    }
  };

  return (
    <section
      id="contact"
      className="
        bg-slate-50
        px-6
        py-24
        text-slate-900
        transition-colors duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* Header */}
        <div className="mb-12">
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
            "
          >
            {content.title}
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            "
          >
            {content.intro}
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* Contact information */}
          <div className="space-y-5">
            <ContactCard
              icon={
                <Mail
                  size={22}
                  strokeWidth={1.8}
                />
              }
              label={content.emailLabel}
              value={content.email}
              href={`mailto:${content.email}`}
            />

            <ContactCard
              icon={
                <FaLinkedin
                  size={22}
                />
              }
              label={content.linkedinLabel}
              value={content.linkedin}
              href="https://www.linkedin.com/in/masuelmatos/"
            />

            <ContactCard
              icon={
                <FaGithub
                  size={22}
                />
              }
              label={content.githubLabel}
              value={content.github}
              href="https://github.com/Masuelm04"
            />

            <ContactCard
              icon={
                <MapPin
                  size={22}
                  strokeWidth={1.8}
                />
              }
              label={content.locationLabel}
              value={content.location}
            />
          </div>

          {/* Form */}
          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-sm
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              {content.formTitle}
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              noValidate
            >
              {/* Name + Email */}
              <div
                className="
                  grid
                  gap-6
                  sm:grid-cols-2
                "
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {content.nameLabel}
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={
                      content.namePlaceholder
                    }
                    disabled={
                      status === "sending"
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3.5
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-500/20
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-blue-500
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {
                      content.emailFieldLabel
                    }
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={
                      content.emailPlaceholder
                    }
                    disabled={
                      status === "sending"
                    }
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3.5
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-blue-500
                      focus:ring-2
                      focus:ring-blue-500/20
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      dark:border-slate-700
                      dark:bg-slate-950
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-blue-500
                    "
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-900
                    dark:text-white
                  "
                >
                  {content.subjectLabel}
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={
                    content.subjectPlaceholder
                  }
                  disabled={
                    status === "sending"
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-blue-500
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-900
                    dark:text-white
                  "
                >
                  {content.messageLabel}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={7}
                  placeholder={
                    content.messagePlaceholder
                  }
                  disabled={
                    status === "sending"
                  }
                  className="
                    w-full
                    resize-y
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:border-blue-500
                  "
                />
              </div>

              {/* Success */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-4
                    py-3
                    text-sm
                    text-emerald-700
                    dark:border-emerald-900
                    dark:bg-emerald-950/40
                    dark:text-emerald-400
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />

                  <span>
                    {content.success}
                  </span>
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    text-sm
                    text-red-700
                    dark:border-red-900
                    dark:bg-red-950/40
                    dark:text-red-400
                  "
                >
                  <AlertCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />

                  <span>
                    {errorMessage ||
                      content.error}
                  </span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  status === "sending"
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all duration-200
                  hover:bg-blue-700
                  hover:shadow-md
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                  focus-visible:ring-offset-2
                  active:scale-[0.99]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:bg-blue-600
                  disabled:hover:shadow-sm
                  dark:focus-visible:ring-offset-slate-900
                "
              >
                {status === "sending" ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                      aria-hidden="true"
                    />

                    {content.sending}
                  </>
                ) : (
                  <>
                    {content.submit}

                    <ExternalLink
                      size={18}
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}