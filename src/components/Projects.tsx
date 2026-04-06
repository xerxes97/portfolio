import type { Project } from "../types";

const projectsData: Project[] = [
  {
    id: '1',
    name: 'Proyecto 1',
    description: 'Descripción del proyecto. Tecnologías usadas.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: '#'
  },
  {
    id: '2',
    name: 'Proyecto 2',
    description: 'Descripción del proyecto. Tecnologías usadas.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    githubUrl: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
