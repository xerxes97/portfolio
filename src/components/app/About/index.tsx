import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 dark:bg-slate-800/30 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="mb-2 block text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
            {t("about.tagline")}
          </span>
          <h2 className="text-4xl font-bold">{t("about.title")}</h2>
        </div>
        <div className="space-y-4 text-slate-500 dark:text-slate-400">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
