import { useTranslation } from "react-i18next";
import { SectionTitle } from "@components/common/SectionTitle";
import { SkillCard } from "@components/common/SkillCard";
import { skills } from "@constants";
import Card from "@components/common/Card";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="panel flex items-center py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle>{t("skills.title")}</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3 relative">
          {skills.map((skill) => (
            <Card key={skill.title}>
              <SkillCard {...skill} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
