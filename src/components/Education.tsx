import type { Education as EducationType } from "../types";

const educationData: EducationType[] = [
  {
    id: '1',
    degree: 'Ingeniería en Sistemas de Información',
    institution: 'Universidad Nacional',
    graduationYear: 'Graduado en 2021',
    type: 'degree'
  },
  {
    id: '2',
    degree: 'Certificación en Desarrollo Web Full Stack',
    institution: 'Plataforma Online',
    graduationYear: '2020',
    type: 'certification'
  }
];

export const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      {educationData.map((edu) => (
        <div key={edu.id} className="degree">
          <h3>{edu.degree} - {edu.institution}</h3>
          <p>{edu.graduationYear}</p>
        </div>
      ))}
    </section>
  );
};
