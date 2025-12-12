"use client";
import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps): ReactElement {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggleTheme(): void {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm transition-colors hover:bg-primary/10 ${className || ""}`}
    >
      {isDark ? (
        <div className="flex items-center gap-2">
          <Sun size={18} />
          <span>Light</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Moon size={18} />
          <span>Dark</span>
        </div>
      )}
    </button>
  );
}


