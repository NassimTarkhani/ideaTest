
import { useTheme } from "@/contexts/ThemeContext";
import { IdeaScore } from "@/types/ideaTypes";
import { useState, useEffect } from "react";
import { Check, Star } from "lucide-react";

interface ScoreCardProps {
  title: string;
  icon: React.ReactNode;
  score: IdeaScore;
  delay?: number;
}

export const ScoreCard = ({ title, icon, score, delay = 0 }: ScoreCardProps) => {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (show) {
      const progressTimer = setTimeout(() => {
        setProgress(score.score);
      }, 500);
      
      return () => clearTimeout(progressTimer);
    }
  }, [show, score.score]);
  
  return (
    <div 
      className={`rounded-lg p-5 transition-all duration-500 transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
    >
      <div className="flex items-center mb-3">
        <div className={`p-2 rounded-full mr-3 ${theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'}`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      
      <div className="mb-4 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        {score.text}
      </p>
    </div>
  );
};
