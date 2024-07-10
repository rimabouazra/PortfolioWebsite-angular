import {tag} from './tag';
export interface Project{
    id: number;
    name: string;
    summary:string;
    description:string;
    projectLink:string;
    pictures:string[];
    tags:tag[];
}