import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Centered image at the top */}
      <img
        src={theme === "light" ? "/black.png" : "/white.png"}
        alt="Logo"
        width={150}
        height={150}
        className="absolute top-5 left-1/2 -translate-x-1/2"
      />

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 p-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg z-50 transition-all duration-300 hover:bg-white/20"
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5 text-idea-darkGray" />
        ) : (
          <Sun className="h-5 w-5 text-white" />
        )}
      </button>
    </>
  );
};
