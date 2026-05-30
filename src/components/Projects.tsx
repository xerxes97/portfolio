import { useTranslation } from "react-i18next";
import type { Project } from "../types";

export const Projects = () => {
  const { t } = useTranslation();

  const projectsData: Project[] = [
    {
      id: '1',
      name: t('projects.items.0.name'),
      description: t('projects.items.0.description'),
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: '#'
    },
    {
      id: '2',
      name: t('projects.items.1.name'),
      description: t('projects.items.1.description'),
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>{t("projects.title")}</h2>
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
              {t("projects.viewOnGitHub")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
