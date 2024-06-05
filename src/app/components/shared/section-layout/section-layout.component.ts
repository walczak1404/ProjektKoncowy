import { Component, ContentChild, DoCheck, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrl: './section-layout.component.scss'
})
export class SectionLayoutComponent {
  @Input() title: string;
}
