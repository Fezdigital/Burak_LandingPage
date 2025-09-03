export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: ProjectCategory;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum ProjectCategory {
  WEB_DEVELOPMENT = 'WEB_DEVELOPMENT',
  ANDROID_DEVELOPMENT = 'ANDROID_DEVELOPMENT',
  DATABASE = 'DATABASE',
}

export interface CreateProjectData {
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: ProjectCategory;
  featured?: boolean;
}

