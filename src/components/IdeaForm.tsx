
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/contexts/ThemeContext";
import { Loader2, Send } from "lucide-react";

interface IdeaFormProps {
  onSubmit: (idea: string) => void;
  isLoading: boolean;
}

export const IdeaForm = ({ onSubmit, isLoading }: IdeaFormProps) => {
  const [idea, setIdea] = useState("");
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className={`p-1 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-blue-600/30 to-green-500/30' : 'bg-gradient-to-r from-blue-600 to-green-500'}`}>
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Décrivez votre idée en détail
          </label>
          <Textarea
            placeholder="Exemple: 'Je veux ouvrir un café entièrement automatisé sans employés' ou 'Je veux lancer un service de livraison de repas diététiques personnalisés'"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className={`min-h-[150px] text-lg mb-4 border-none focus-visible:ring-2 focus-visible:ring-blue-500 ${theme === 'dark' ? 'bg-gray-800 placeholder:text-gray-400' : 'bg-gray-50 placeholder:text-gray-500'}`}
          />
          <div className="flex items-center gap-3 justify-between">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {idea.length} caractères
            </div>
            <Button 
              type="submit"
              disabled={isLoading || !idea.trim()}
              className="py-6 px-8 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                <>
                  Analyser mon idée
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Analyse entièrement sécurisée et confidentielle
          </div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} shadow-sm`}>
          <h4 className="font-medium mb-2 text-sm">Exemple d'idée #1</h4>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            "Je veux créer une application qui met en relation des personnes âgées avec des étudiants pour du soutien technique et des cours d'informatique à domicile."
          </p>
        </div>
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} shadow-sm`}>
          <h4 className="font-medium mb-2 text-sm">Exemple d'idée #2</h4>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            "Je souhaite lancer une plateforme de location d'espaces de stockage entre particuliers, comme un Airbnb des garde-meubles."
          </p>
        </div>
      </div>
    </form>
  );
};
