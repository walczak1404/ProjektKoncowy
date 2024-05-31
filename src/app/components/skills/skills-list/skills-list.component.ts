import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent {
  @Input() skills: string[];
}
