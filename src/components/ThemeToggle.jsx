"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting until the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null if not mounted to avoid UI flickering during initial load
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-[#E1B12C] dark:text-gray-800 transition-all duration-300 hover:scale-110 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {/* Switch icon based on current active theme */}
      {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;