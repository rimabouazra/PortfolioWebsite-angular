import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  isWorkExperienceOpen : boolean=false;
  isCertificationsOpen : boolean=false;
  isSkillsOpen : boolean=false;
  isEducationOpen : boolean=false;
  constructor(private titleService:Title , private renderer : Renderer2){
    this.titleService.setTitle('Rima Bouazra - Resume');
  }
  DownloadFile(){
    const link=this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/cv.pdf');
    link.setAttribute('download','cv.pdf');
    link.click();
    link.remove();
  }
}
