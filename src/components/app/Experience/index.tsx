import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../common/SectionTitle";
import { TimelineItem } from "../../common/TimelineItem";
import { experiences } from "../../../constants";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="bg-slate-50 dark:bg-slate-800/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle>{t("experience.title")}</SectionTitle>
        <div className="space-y-8">
          {experiences.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
