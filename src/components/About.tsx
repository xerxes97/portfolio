import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Element name="about">
      <section className="about">
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
      </section>
    </Element>
  );
};
