import { useState, useEffect } from "react";
import { IdeaResponse } from "@/types/ideaTypes";
import { ImprovementList } from "./ImprovementList";
import { useTheme } from "@/contexts/ThemeContext";
import { Wrench } from "lucide-react";

interface ResultSectionProps {
  result: IdeaResponse;
}

export const ResultSection = ({ result }: ResultSectionProps) => {
  const { theme } = useTheme();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 300);
  }, []);

  const improvements = result.improvements || [];

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-20">
      {/* Header with Score */}
      <div
        className={`text-center mb-10 transition-all duration-500 ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="inline-block">
          <div
            className={`relative w-32 h-32 mx-auto ${theme === "dark" ? "bg-gray-800" : "bg-white"
              } rounded-full shadow-lg mb-4 flex items-center justify-center`}
          >
            <div className="text-4xl font-bold gradient-text">
              {result.ideaScore}%
            </div>
            {/* Circular Progress Bar */}
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke={theme === "dark" ? "#2d2d3a" : "#f3f4f6"}
                strokeWidth="12"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="12"
                strokeDasharray="339.292"
                strokeDashoffset={339.292 - (339.292 * result.ideaScore) / 100}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#4ADE80" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Score d'Idée</h2>
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Évaluation globale de votre idée de business
          </p>
        </div>
      </div>

      {/* Suggestions d'Amélioration - More Space for API Output */}
      <div
        className={`w-full rounded-lg p-8 ${theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg animate-[fade-in_0.5s_ease-out_1.3s_forwards] opacity-0`}
      >
        <div className="flex items-center mb-4">
          <div
            className={`p-3 rounded-full mr-4 ${theme === "dark" ? "bg-primary/20" : "bg-primary/10"
              }`}
          >
            <Wrench className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Suggestions d'Amélioration</h3>
        </div>
        <div className="max-h-128 overflow-y-auto">
          <ImprovementList improvements={improvements} />
        </div>
      </div>

      {/* Feedback Section */}
      <div
        className={`mt-10 w-full text-center rounded-lg p-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg animate-[fade-in_0.5s_ease-out_1.5s_forwards] opacity-0`}
      >
        <h3 className="text-xl font-bold mb-4">
          Cette analyse vous a-t-elle été utile?
        </h3>
        <div className="flex justify-center space-x-4">
          <button
            className={`px-6 py-2 rounded-full transition-all ${theme === "dark"
              ? "bg-primary/20 hover:bg-primary/30 text-white"
              : "bg-primary/10 hover:bg-primary/20 text-primary"
              }`}
          >
            👍 Oui
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all ${theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
          >
            👎 Non
          </button>
        </div>
      </div>
    </div>
  );
};
