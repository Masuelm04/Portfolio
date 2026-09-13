import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Masuel Matos | QA Engineer",
  description:
    "QA Engineer portfolio focused on software testing and QA Automation.",
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