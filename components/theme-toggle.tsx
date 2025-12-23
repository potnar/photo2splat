"use client";

import { useEffect, useState } from "react";
import { Around } from "@theme-toggles/react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Ustawienie początkowego motywu (localStorage + prefers-color-scheme)
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark =
      stored === "dark" || (!stored && prefersDark);

    if (shouldBeDark) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }

    setMounted(true);
  }, []);

  // Funkcja, którą przekażemy do `toggle` w Around
  const setTheme = (
    value: boolean | ((prev: boolean) => boolean)
  ) => {
    setIsDark((prev) => {
      const next =
        typeof value === "function" ? value(prev) : value;

      const root = document.documentElement;

      if (next) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  // Żeby nie migało między SSR a CSR
  if (!mounted) {
    return (
      <button
        aria-hidden="true"
        className="h-9 w-9 rounded-full border border-border bg-muted/60"
      />
    );
  }

  return (
    <Around
      toggled={isDark}
      toggle={setTheme}
      duration={750}
      className="h-9 w-9 text-foreground"
      aria-label="Toggle theme"
      title="Toggle theme"
    />
  );
}
