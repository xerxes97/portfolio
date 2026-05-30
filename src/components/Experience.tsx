import { useTranslation } from "react-i18next";
import type { Experience as ExperienceType } from "../types";

export const Experience = () => {
  const { t } = useTranslation();

  const experienceData: ExperienceType[] = [
    {
      id: '1',
      position: t('experience.items.0.position'),
      company: t('experience.items.0.company'),
      startDate: t('experience.items.0.startDate'),
      endDate: t('experience.items.0.endDate'),
      description: t('experience.items.0.description'),
      achievements: [
        t('experience.items.0.achievements.0'),
        t('experience.items.0.achievements.1'),
        t('experience.items.0.achievements.2'),
        t('experience.items.0.achievements.3'),
      ]
    },
    {
      id: '2',
      position: t('experience.items.1.position'),
      company: t('experience.items.1.company'),
      startDate: t('experience.items.1.startDate'),
      endDate: t('experience.items.1.endDate'),
      description: t('experience.items.1.description'),
      achievements: [
        t('experience.items.1.achievements.0'),
        t('experience.items.1.achievements.1'),
        t('experience.items.1.achievements.2'),
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>{t("experience.title")}</h2>
      {experienceData.map((job) => (
        <div key={job.id} className="job">
          <h3>{job.position} - {job.company}</h3>
          <p>{job.startDate} - {job.endDate}</p>
          <p>{job.description}</p>
          <ul>
            {job.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
