import { tag } from './../_models/tag';
import { Project } from './../_models/project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {id: 0, name: "Sample Python Project", pictures: ["assets/Image1.png","assets/Image2.png","assets/Image3.png"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [tag.PYTHON]},
    {id: 1, name: "Sample Angular App", pictures: ["assets/Image1.png","assets/Image2.png","assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [tag.ANGULAR, tag.TYPESCRIPT, tag.NODEJS]},
    {id: 2, name: "Sample .Net App", pictures: ["assets/Image1.png","assets/Image2.png","assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [tag.REACT ,tag.CSHARP, tag.ASPNET]},
    {id: 3, name: "Web API Project", pictures: ["assets/Image1.png","assets/Image2.png","assets/Image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [tag.CSHARP, tag.ASPNET]},
    {id: 4, name: "Chrome Extension", pictures: ["assets/Image1.png","assets/Image2.png","assets/Image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [tag.JAVASCRIPT]},
    {id: 5, name: "Mobile App", pictures: ["assets/Image1.png","assets/Image2.png","assets/Image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [tag.JAVA]}
  ];
  constructor() { }
  GetProjects(){
    return this.projects;
  }
  GetProjectById(id:number):Project{
    let project= this.projects.find(project=>project.id==id);
    if (project===undefined){
      throw new TypeError('there is no project that matches this id:'+id);
    }
    return project;
  }

  GetProjectsByFilter(filterTags :tag[]){
    let filteredProjects : Project[]=[];
    this.projects.forEach(function(Project){
      let founAll = true;
      filterTags.forEach(function(filterTag){
        if(Project.tags.includes(filterTag)==false){
          founAll= false;
        }
      });
      if(founAll){
        filteredProjects.push(Project);
      }
    });
    return filteredProjects;
  }
}
