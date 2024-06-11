import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Output() cookiesClosed =  new EventEmitter<boolean>();

  onCookiesClose(cookiesAccepted: boolean) {
    this.cookiesClosed.emit(cookiesAccepted);
  }
}
