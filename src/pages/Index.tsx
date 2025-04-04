
import { HeroSection } from "@/components/HeroSection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { Lightbulb, TrendingUp, BarChart4 } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-800/80' : 'bg-white hover:bg-gray-50'} transition-all card-hover`}>
      <div className={`p-3 rounded-full w-fit mb-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
};

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero transition-all duration-300">
      <ThemeToggle />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4">
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment Ça Fonctionne</h2>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Notre IA analyse votre idée selon plusieurs critères pour vous donner une évaluation complète et des conseils concrets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Lightbulb className="h-6 w-6 text-blue-600" />}
              title="Analyse d'Originalité"
              description="Évaluez si votre idée se démarque dans un marché concurrentiel et propose une valeur unique."
            />
            <FeatureCard 
              icon={<BarChart4 className="h-6 w-6 text-blue-600" />}
              title="Potentiel du Marché"
              description="Découvrez si votre idée répond à un besoin réel et si le marché est suffisamment grand."
            />
            <FeatureCard 
              icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
              title="Capacité d'Évolution"
              description="Évaluez comment votre idée peut évoluer, s'adapter et croître dans le temps."
            />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos utilisateurs</h2>
            <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Des entrepreneurs de tous horizons utilisent notre plateforme pour valider leurs idées.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-3">
                  <h4 className="font-medium">Sophie M.</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Fondatrice, EcoDesign</p>
                </div>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                "J'ai pu identifier rapidement les faiblesses de mon concept et l'améliorer avant de me lancer. Cette analyse m'a fait gagner un temps précieux."
              </p>
            </div>
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">T</div>
                <div className="ml-3">
                  <h4 className="font-medium">Thomas R.</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>CEO, TechStart</p>
                </div>
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                "L'analyse concurrentielle a été révélatrice. J'ai pu ajuster mon positionnement et me différencier plus efficacement."
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
