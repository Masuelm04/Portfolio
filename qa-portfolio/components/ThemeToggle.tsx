"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => {
  return () => {};
};

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode =
      !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle(
      "dark",
      newDarkMode
    );

    localStorage.setItem(
      "theme",
      newDarkMode ? "dark" : "light"
    );

    setDarkMode(newDarkMode);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700"
        aria-label="Change theme"
      >
        ◐
      </button>
    );
  }

  const isCurrentlyDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label="Change theme"
      title="Change theme"
    >
      {isCurrentlyDark || darkMode ? "☀️" : "🌙"}
    </button>
  );
}