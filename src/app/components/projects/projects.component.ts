import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  config: SwiperOptions = {
    navigation: true,
    pagination: {clickable: true}
  }

  // currentProject = 1;
  // maxProjects = 3;

  // onNextProject() {
  //   this.currentProject = this.currentProject < this.maxProjects ? this.currentProject+1 : 1;
  // }

  // onLastProject() {
  //   this.currentProject = this.currentProject > 1 ? this.currentProject-1 : this.maxProjects;
  // }
}
