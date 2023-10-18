import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: null | string = null;

  constructor() {
    setTimeout(() => {
      this.content = 'Hello World';
    }, 3000);
  }
}
