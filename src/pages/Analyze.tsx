
import { useState } from "react";
import { IdeaForm } from "@/components/IdeaForm";
import { ResultSection } from "@/components/ResultSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { analyzeIdea } from "@/services/ideaService";
import { IdeaResponse } from "@/types/ideaTypes";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Loader2 } from "lucide-react";

const Analyze = () => {
  const [result, setResult] = useState<IdeaResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmitIdea = async (idea: string) => {
    setIsLoading(true);
    
    try {
      const response = await analyzeIdea(idea);
      setResult(response);
      
      toast({
        title: "Analyse terminée",
        description: "Votre idée a été analysée avec succès.",
      });
    } catch (error) {
      console.error("Error analyzing business idea:", error);
      
      toast({
        title: "Erreur d'analyse",
        description: "Une erreur est survenue lors de l'analyse de votre idée. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero transition-all duration-300">
      <ThemeToggle />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        <Link to="/" className="inline-block mb-8">
          <Button variant="ghost" className="flex items-center gap-2 text-[#0052c9] dark:text-[#0052c9]">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Button>
        </Link>
        
        <div className={`rounded-xl p-6 mb-10 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} shadow-lg`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">Analysez Votre Idée de Business</h2>
          <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} font-montserrat`}>
            Décrivez votre concept et notre IA vous donnera une analyse détaillée en quelques secondes.
          </p>
          <IdeaForm onSubmit={handleSubmitIdea} isLoading={isLoading} />
        </div>
        
        {isLoading && !result && (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-16 w-16 text-[#0052c9] animate-spin mb-4" />
            <p className="text-xl font-medium text-gray-600 dark:text-gray-300 font-montserrat">Analyse en cours...</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 font-montserrat">Cela peut prendre quelques secondes</p>
          </div>
        )}
        
        {result && <ResultSection result={result} />}
      </main>
      
      <Footer />
    </div>
  );
};

export default Analyze;
