export interface Project {
  id: number;
  title: string;
  description: string | null;
  views: number;
  images: string;
  content: string | null;
  total_team: number;
  url_site: string | null;
  userId: number;
  href: string | null;
  project_tech_stacks: ProjectTechStacks[];
}

export interface ProjectTechStacks {
  projectId: number;
  techStackId: number;
  TechStacks: TechStacks;
}

export interface TechStacks {
  id: number;
  name: string;
  icon: string | null;
}

export interface ProjectsData {
  allProjectsData: Project[];
}
