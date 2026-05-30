import { useTranslation } from "react-i18next";
import { Pannel } from "../../common"

export const Header = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    };

    return <Pannel><header>
        <h1 className="">
            Cristian Quevedo
        </h1>
        <button
            onClick={toggleLanguage}
            className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors"
        >
            {i18n.language === "en" ? "ES" : "EN"}
        </button>
    </header></Pannel>;
};

export default Header;