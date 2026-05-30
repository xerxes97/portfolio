import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="contact">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.email")}</p>
      <p>
        LinkedIn: <a href="#">{t("contact.linkedin")}</a>
      </p>
      <p>
        GitHub: <a href="#">{t("contact.github")}</a>
      </p>
    </section>
  );
};
