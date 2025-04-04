
import { useTheme } from "@/contexts/ThemeContext";

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-8 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} mt-auto`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="font-bold text-xl mb-2 gradient-text">IdéaTest</div>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Validez vos idées de business avec l'aide de l'IA
            Développer par Sollea Ai & BEN8N
          </p>
        </div>

        <div className="flex space-x-8">
          <a href="#" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
            À propos
          </a>
          <a href="#" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
            Conditions d'utilisation
          </a>
          <a href="#" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
            Confidentialité
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-200 dark:border-gray-800">
        <p className={`text-center text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} IdéaTest. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
