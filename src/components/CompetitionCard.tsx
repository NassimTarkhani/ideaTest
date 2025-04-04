
import { IdeaCompetition } from "@/types/ideaTypes";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

interface CompetitionCardProps {
  competition: IdeaCompetition;
  index: number;
}

export const CompetitionCard = ({ competition, index }: CompetitionCardProps) => {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000 + index * 300);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`rounded-lg p-4 mb-3 transition-all duration-500 transform ${
        show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      } ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'} shadow-md`}
    >
      <h4 className="font-bold text-lg mb-1">{competition?.name || "Concurrent"}</h4>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {competition?.description || "Aucune description disponible."}
      </p>
    </div>
  );
};
