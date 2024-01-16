import { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  views: number;
  images: string;
  content: string;
  total_team: number;
  url_site: string;
  userId: number;
  tech_stacks: IconType[];
}
