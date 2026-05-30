import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="hero">
      <h2>{t("hero.title")}</h2>
      <p>{t("hero.subtitle")}</p>
    </section>
  );
};
