import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <span className="font-bold">CQ Portfolio</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          {t("footer.copyright")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
