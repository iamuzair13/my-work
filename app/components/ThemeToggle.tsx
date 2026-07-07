"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LiquidGlass } from "@/app/components/ui/LiquidGlass";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <LiquidGlass variant="pill" shine={false} className="inline-flex">
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-all duration-300 hover:text-accent-primary active:scale-[0.98]"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {mounted ? (
          isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </LiquidGlass>
  );
}
