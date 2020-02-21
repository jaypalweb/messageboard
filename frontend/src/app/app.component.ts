import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Message Board</h1>
  <app-new-message (onPosted)="onPosted($event)"></app-new-message>
  <app-messages></app-messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessagesComponent, { static: false }) messages: MessagesComponent;

  onPosted(message) {
    //console.log(message);
    this.messages.messages.push(message);
  }
}
