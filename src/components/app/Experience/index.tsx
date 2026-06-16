import { useTranslation } from "react-i18next";
import { SectionTitle } from "@components/common/SectionTitle";
import { TimelineItem } from "@components/common/TimelineItem";
import { experiences } from "@constants";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="panel flex items-center dark:bg-black">
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
