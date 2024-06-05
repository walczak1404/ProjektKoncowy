import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerVisible: boolean;

  ngOnInit(): void {
      this.headerVisible = false;

      window.addEventListener("scroll", this.onChangeHeaderVisibility);
  }

  onChangeHeaderVisibility() {
    // if(window.scrollY > 100) console.log("test");
    console.log(window.scrollY);
  }
}
