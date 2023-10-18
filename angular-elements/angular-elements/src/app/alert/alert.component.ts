import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: '<div>This is an alert. {{message}}</div>',
  styles: [`
    div {
      border: 1px solid black;
      background-color: salmon;
      color: white;
      padding: 10px;
      margin: 10px;
    }
  `]
})
export class AlertComponent {
  @Input() message!: string;
}
