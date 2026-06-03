import { useTranslation } from "react-i18next";
import { SectionTitle } from "@components/common/SectionTitle";
import { SkillCard } from "@components/common/SkillCard";
import { skills } from "@constants";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle>{t("skills.title")}</SectionTitle>
        <div className="grid gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
