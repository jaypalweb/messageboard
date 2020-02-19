import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Message Board</h1>
  <app-new-message></app-new-message>
  <app-messages></app-messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
