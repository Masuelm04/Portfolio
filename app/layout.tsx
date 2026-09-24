import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: {
    default: "Masuel Matos | QA Automation Engineer Portfolio",
    template: "%s | Masuel Matos",
  },

  description:
    "QA Engineer and Computer Systems Engineer focused on software testing, QA Automation, Playwright, Python, Pytest and API testing.",

  keywords: [
    "Masuel Matos",
    "QA Engineer",
    "QA Automation",
    "Software Testing",
    "Playwright",
    "Python",
    "Pytest",
    "API Testing",
    "Test Automation",
    "Quality Assurance",
  ],

  authors: [
    {
      name: "Masuel Matos",
    },
  ],

  creator: "Masuel Matos",

  openGraph: {
    title: "Masuel Matos | QA Automation Engineer",
    description:
      "QA Automation Engineer portfolio focused on software testing and QA Automation with Playwright, Python and Pytest.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_DO",
    siteName: "Masuel Matos Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Masuel Matos | QA Automation Engineer",
    description:
      "QA Automation Engineer portfolio focused on software testing and QA Automation.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="
          bg-white
          text-slate-900
          transition-colors duration-300

          dark:bg-[#020817]
          dark:text-slate-100
        "
      >
        <LanguageProvider>
          <Navbar />

          <main>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}