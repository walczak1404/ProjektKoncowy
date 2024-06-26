import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild("header", {static: true}) header: ElementRef;
  langsVisible: boolean;
  headerVisible: boolean;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
      this.langsVisible = false;
      this.headerVisible = false;
  }

  @HostListener("window:scroll")
  onChangeHeaderVisibility() {
    if(window.scrollY / window.innerHeight >= 1)  this.header.nativeElement.classList.add("shadow");
    else this.header.nativeElement.classList.remove("shadow");
  }

  onLangDisplay() {
    this.langsVisible = !this.langsVisible;
  }

  onChangeLanguage(event) {
    const selectedLanguage = event.target.dataset["lang"];
    if(localStorage.getItem("useCookies") == "true") {
      document.cookie = `lang=${selectedLanguage}`;
    }
    localStorage.setItem("lang", selectedLanguage);
    this.translateService.use(selectedLanguage);
    this.langsVisible = false;
  }

  onToggleHeader() {
    this.headerVisible = !this.headerVisible;
    this.langsVisible = false;
  }
}
