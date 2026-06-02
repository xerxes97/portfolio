import { useTranslation } from "react-i18next";
import { Button } from "../../common/Button";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="mb-4 text-6xl font-display">
          Cristian Quevedo
        </h1>
        <h2 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
          {t("hero.title")}
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-500 dark:text-slate-400">
          {t("hero.description")}
        </p>
        <div className="flex justify-center gap-4">
          <Button>{t("hero.contactMe")}</Button>
          <Button variant="outline">{t("hero.downloadResume")}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
