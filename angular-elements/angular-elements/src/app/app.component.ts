import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: null | string | SafeHtml = null;

  constructor(injector: Injector, domSanitizer: DomSanitizer) {
    const AlertElement = createCustomElement(AlertComponent, { injector });
    customElements.define('app-alert', AlertElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<app-alert message="Rendered dynamically"></app-alert>');
    }, 3000);
  }
}
