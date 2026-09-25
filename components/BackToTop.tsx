"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-slate-200
        bg-white
        text-slate-700
        shadow-lg
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-blue-600
        hover:bg-blue-600
        hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-blue-600
        focus:ring-offset-2
        dark:border-slate-700
        dark:bg-slate-900
        dark:text-slate-200
        dark:hover:border-blue-500
        dark:hover:bg-blue-600
        dark:hover:text-white
        dark:focus:ring-offset-slate-950
      "
    >
      <ArrowUp size={19} strokeWidth={2.2} />
    </button>
  );
}