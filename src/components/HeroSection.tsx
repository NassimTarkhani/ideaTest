
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/analyze");
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center px-4">
      <div className="p-2 bg-blue-100 rounded-full mb-6 dark:bg-blue-900/30">
        <div className="px-4 py-1 text-sm font-medium text-blue-800 dark:text-blue-200 bg-white dark:bg-gray-800 rounded-full">
          Nouvelle Plateforme d'Analyse
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
        Testez votre Idée de Business en Quelques Secondes
      </h1>
      
      <p className={`text-xl md:text-2xl max-w-3xl mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        Obtenez un retour instantané sur l'originalité, le potentiel du marché et l'évolutivité de votre idée.
      </p>
      
      <Button 
        onClick={handleGetStarted}
        className="text-lg py-6 px-8 font-medium rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
      >
        Commencer l'analyse <ArrowRight className="ml-1" />
      </Button>
      
      <div className="mt-12 p-4 rounded-lg bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Plus de 1,000+ idées analysées cette semaine
        </p>
      </div>
    </div>
  );
};
