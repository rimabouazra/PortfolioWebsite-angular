import { ProjectsService } from './../_services/projects.service';
import { Component ,Input, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { tag } from '../_models/tag';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  bsModalRef?: BsModalRef;
  @Input() projects={} as Project[];
  isCollapsed : boolean=true;
  typescript : boolean=false;
  angular: boolean=false;
  javascript: boolean=false;
  python: boolean=false;
  csharp: boolean=false;
  java: boolean=false;
  nodejs: boolean=false;
  aspnet: boolean=false;
  react: boolean=false;
  filtering: boolean=false;

  constructor(private titleService:Title, private ProjectsService:ProjectsService,private modalService:BsModalService){
    this.titleService.setTitle('Rima Bouazra - Portfolio');
  }
  ngOnInit(): void {
    this.projects=this.ProjectsService.GetProjects();
  }
  openProjectModal(project: Project): void {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: { project }
    };
    this.bsModalRef=this.modalService.show(ProjectModalComponent,modalOptions);
  }
  Filter(){
    let filterTags : tag[]=[];
    if(this.typescript){
      filterTags.push(tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(tag.ANGULAR);
    }
    if(this.javascript){
      filterTags.push(tag.JAVASCRIPT);
    }
    if(this.python){
      filterTags.push(tag.PYTHON);
    }
    if(this.csharp){
      filterTags.push(tag.CSHARP);
    }
    if(this.java){
      filterTags.push(tag.JAVA);
    }
    if(this.nodejs){
      filterTags.push(tag.NODEJS);
    }
    if(this.aspnet){
      filterTags.push(tag.ASPNET);
    }
    if(this.react){
      filterTags.push(tag.REACT);
    }
    if(this.angular||this.aspnet||this.csharp||this.java||this.javascript||this.nodejs||this.python||this.react||this.typescript){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }
    
    this.projects=this.ProjectsService.GetProjectsByFilter(filterTags);
  }
  ResetFilters(){
    this.angular=false;
    this.aspnet=false;
    this.csharp=false;
    this.java=false;
    this.javascript=false;
    this.nodejs=false;
    this.python=false;
    this.react=false;
    this.typescript=false;
    this.filtering=false;

    this.projects=this.ProjectsService.GetProjects();
  }
}
