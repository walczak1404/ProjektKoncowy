import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showCookiesPopup: boolean;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang("en");
    this.translateService.use(localStorage.getItem("lang") || "en");
  }

  ngOnInit(): void {
    this.showCookiesPopup = localStorage.getItem("useCookies") ? false : true;
  }

  onCookiesClose(event) {
    localStorage.setItem("useCookies", event);
    this.showCookiesPopup = false;
  }
}
