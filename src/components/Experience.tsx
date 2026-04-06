import type { Experience as ExperienceType } from "../types";

const experienceData: ExperienceType[] = [
  {
    id: '1',
    position: 'Desarrollador Full Stack',
    company: 'Empresa Tech S.A.',
    startDate: 'Enero 2023',
    endDate: 'Presente',
    description: 'Desarrollé aplicaciones web utilizando React y Node.js.',
    achievements: [
      'Implementé APIs RESTful',
      'Optimicé bases de datos',
      'Colaboré en la migración a la nube',
      'Logré una reducción del 30% en tiempos de carga'
    ]
  },
  {
    id: '2',
    position: 'Desarrollador Front-End',
    company: 'Startup Innovadora',
    startDate: 'Junio 2021',
    endDate: 'Diciembre 2022',
    description: 'Trabajé en el desarrollo de interfaces de usuario con Vue.js y TypeScript.',
    achievements: [
      'Participé en el diseño de UX/UI',
      'Integración con servicios back-end',
      'Contribuí al lanzamiento exitoso de 3 productos principales'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
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
