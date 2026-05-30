import { useTranslation } from "react-i18next";
import type { Skill } from "../types";

const skillsData: Skill[] = [
  { category: 'frontend', name: 'React' },
  { category: 'frontend', name: 'Vue.js' },
  { category: 'frontend', name: 'HTML/CSS' },
  { category: 'frontend', name: 'JavaScript/TypeScript' },
  { category: 'backend', name: 'Node.js' },
  { category: 'backend', name: 'Python' },
  { category: 'backend', name: 'Express' },
  { category: 'backend', name: 'Django' },
  { category: 'database', name: 'MongoDB' },
  { category: 'database', name: 'PostgreSQL' },
  { category: 'database', name: 'MySQL' },
  { category: 'tools', name: 'Git' },
  { category: 'tools', name: 'Docker' },
  { category: 'tools', name: 'AWS' },
  { category: 'tools', name: 'Azure' }
];

export const Skills = () => {
  const { t } = useTranslation();
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="skills">
      <h2>{t("skills.title")}</h2>
      <div className="skills-grid">
        <div>
          <h3>{t("skills.frontend")}</h3>
          <ul>
            {skillsByCategory.frontend?.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t("skills.backend")}</h3>
          <ul>
            {skillsByCategory.backend?.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t("skills.databases")}</h3>
          <ul>
            {skillsByCategory.database?.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t("skills.tools")}</h3>
          <ul>
            {skillsByCategory.tools?.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
