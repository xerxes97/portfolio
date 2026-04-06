import { Link } from "react-scroll";

export const Header = () => {
  return (
    <header className="header sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Cristian Quevedo
          </h1>
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="about" 
                smooth={true} 
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="skills"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="projects"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="experience"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="education"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li>
              <Link 
                to="contact"
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
