import { useTranslation } from "react-i18next";
import type { Education as EducationType } from "../types";

export const Education = () => {
  const { t } = useTranslation();

  const educationData: EducationType[] = [
    {
      id: '1',
      degree: t('education.items.0.degree'),
      institution: t('education.items.0.institution'),
      graduationYear: t('education.items.0.graduationYear'),
      type: 'degree'
    },
    {
      id: '2',
      degree: t('education.items.1.degree'),
      institution: t('education.items.1.institution'),
      graduationYear: t('education.items.1.graduationYear'),
      type: 'certification'
    }
  ];

  return (
    <section id="education" className="education">
      <h2>{t("education.title")}</h2>
      {educationData.map((edu) => (
        <div key={edu.id} className="degree">
          <h3>{edu.degree} - {edu.institution}</h3>
          <p>{edu.graduationYear}</p>
        </div>
      ))}
    </section>
  );
};
