export interface Skill {
  category: 'frontend' | 'backend' | 'database' | 'tools';
  name: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  graduationYear: string;
  type: 'degree' | 'certification';
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
}
