import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from './../_services/projects.service';
import { Project } from '../_models/project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredproject={} as Project;
  constructor(private titleService:Title, private ProjectsService:ProjectsService){
    this.titleService.setTitle('Rima Bouazra - Home');
  }
  ngOnInit(): void {
    this.featuredproject=this.ProjectsService.GetProjectById(0);
  }
}
