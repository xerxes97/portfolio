import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>{t("footer.copyright")}</p>
    </footer>
  );
};
