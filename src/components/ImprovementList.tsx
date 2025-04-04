
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

interface ImprovementListProps {
  improvements: string[];
}

export const ImprovementList = ({ improvements = [] }: ImprovementListProps) => {
  const { theme } = useTheme();
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  useEffect(() => {
    improvements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, 1000 + index * 300);
    });
  }, [improvements]);
  
  return (
    <div className="mt-4">
      <ul className="space-y-3">
        {improvements.map((improvement, index) => (
          <li 
            key={index}
            className={`flex items-start transition-all duration-500 transform ${
              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <CheckCircle className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {improvement}
            </span>
          </li>
        ))}
      </ul>
      {improvements.length === 0 && (
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Aucune suggestion d'amélioration pour cette idée.
        </p>
      )}
    </div>
  );
};
