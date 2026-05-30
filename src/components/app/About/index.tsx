import { useTranslation } from "react-i18next";
import { Pannel } from "../../common";

export const About = () => {
    const { t } = useTranslation();
    return <Pannel>{t("about.title")}</Pannel>;
};

export default About;