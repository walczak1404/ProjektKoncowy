import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  currentProject = 1;
  maxProjects = 3;

  onNextProject() {
    this.currentProject = this.currentProject < this.maxProjects ? this.currentProject+1 : 1;
  }

  onLastProject() {
    this.currentProject = this.currentProject > 1 ? this.currentProject-1 : this.maxProjects;
  }
}
