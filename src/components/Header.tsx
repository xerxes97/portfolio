import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <header className="header sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Cristian Quevedo
          </h1>
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500}
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link 
                  to="skills"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t("nav.skills")}
                </Link>
              </li>
              <li>
                <Link 
                  to="projects"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link 
                  to="experience"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t("nav.experience")}
                </Link>
              </li>
              <li>
                <Link 
                  to="education"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t("nav.education")}
                </Link>
              </li>
              <li>
                <Link 
                  to="contact"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors"
            >
              {i18n.language === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
