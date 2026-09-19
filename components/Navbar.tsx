"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "./LanguageProvider";
import { translations } from "./translations";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language].navbar;

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      label: t.home,
      href: "#home",
    },
    {
      label: t.about,
      href: "#about",
    },
    {
      label: t.skills,
      href: "#skills",
    },
    {
      label: t.projects,
      href: "#projects",
    },
    {
      label: t.certifications,
      href: "#certifications",
    },
    {
      label: t.contact,
      href: "#contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed left-0 top-0 z-50 w-full
        border-b border-slate-200/80
        bg-white/95
        text-slate-900
        backdrop-blur-xl
        transition-colors duration-300

        dark:border-slate-800
        dark:bg-[#020817]/95
        dark:text-white
      "
    >
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-4 py-4

          sm:px-6
          lg:px-8
        "
      >
        {/* Logo / Name */}
        <a
          href="#home"
          className="
            shrink-0
            text-lg
            font-bold
            text-slate-950

            dark:text-white
          "
          onClick={closeMenu}
          aria-label="Go to home"
        >
          Masuel Matos
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-sm
                font-medium
                text-slate-700
                transition-colors

                hover:text-blue-600

                dark:text-slate-200
                dark:hover:text-blue-400
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          {/* Language + Theme always visible */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex h-10 w-10
              items-center
              justify-center
              rounded-lg
              border border-slate-300
              text-slate-700
              transition

              hover:bg-slate-100

              dark:border-slate-700
              dark:text-slate-200
              dark:hover:bg-slate-900

              lg:hidden
            "
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="
            border-t border-slate-200
            bg-white
            px-4 py-4

            dark:border-slate-800
            dark:bg-[#020817]

            sm:px-6
            lg:hidden
          "
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  rounded-lg
                  px-4 py-3
                  font-medium
                  text-slate-700
                  transition

                  hover:bg-blue-50
                  hover:text-blue-600

                  dark:text-slate-200
                  dark:hover:bg-slate-900
                  dark:hover:text-blue-400
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// export default function Navbar() {
//   const { language } = useLanguage();
//   const t = translations[language].navbar;

//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     {
//       label: t.home,
//       href: "#home",
//     },
//     {
//       label: t.about,
//       href: "#about",
//     },
//     {
//       label: t.skills,
//       href: "#skills",
//     },
//     {
//       label: t.projects,
//       href: "#projects",
//     },
//     {
//       label: t.certifications,
//       href: "#certifications",
//     },
//     {
//       label: t.contact,
//       href: "#contact",
//     },
//   ];

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header
//       className="
//         fixed left-0 top-0 z-50 w-full
//         border-b border-slate-200/80
//         bg-white/95
//         text-slate-900
//         backdrop-blur-xl
//         transition-colors duration-300

//         dark:border-slate-800
//         dark:bg-[#020817]/95
//         dark:text-white
//       "
//     >
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         <a
//           href="#home"
//           className="text-lg font-bold text-slate-950 dark:text-white"
//           onClick={closeMenu}
//         >
//           Masuel Matos
//         </a>

//         {/* Desktop navigation */}
//         <div className="hidden items-center gap-7 lg:flex">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className="
//                 text-sm font-medium
//                 text-slate-700
//                 transition-colors
//                 hover:text-blue-600

//                 dark:text-slate-200
//                 dark:hover:text-blue-400
//               "
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         {/* Desktop controls */}
//         <div className="hidden items-center gap-3 lg:flex">
//           <LanguageSwitcher />
//           <ThemeToggle />
//         </div>

//         {/* Mobile button */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="
//             flex h-10 w-10 items-center justify-center
//             rounded-lg
//             border border-slate-300
//             text-slate-700
//             transition

//             hover:bg-slate-100

//             dark:border-slate-700
//             dark:text-slate-200
//             dark:hover:bg-slate-900

//             lg:hidden
//           "
//           aria-label={
//             menuOpen
//               ? "Close navigation menu"
//               : "Open navigation menu"
//           }
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? (
//             <X size={20} />
//           ) : (
//             <Menu size={20} />
//           )}
//         </button>
//       </nav>

//       {/* Mobile navigation */}
//       {menuOpen && (
//         <div
//           className="
//             border-t border-slate-200
//             bg-white
//             px-6 py-5

//             dark:border-slate-800
//             dark:bg-[#020817]

//             lg:hidden
//           "
//         >
//           <div className="flex flex-col gap-1">
//             {links.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className="
//                   rounded-lg
//                   px-4 py-3
//                   font-medium
//                   text-slate-700
//                   transition

//                   hover:bg-blue-50
//                   hover:text-blue-600

//                   dark:text-slate-200
//                   dark:hover:bg-slate-900
//                   dark:hover:text-blue-400
//                 "
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
//             <LanguageSwitcher />
//             <ThemeToggle />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }