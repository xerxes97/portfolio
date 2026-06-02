import { useTranslation } from "react-i18next";

const sections = [
  { key: "home", href: "#home" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="font-bold">CQ Portfolio</span>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-8 md:flex">
            {sections.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors"
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </button>
          <button
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300 dark:border-slate-600 rounded transition-colors"
            aria-label="Toggle theme"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
