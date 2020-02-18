import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';

@Component({
  selector: 'app-root',
  template: '<h1>Hello {{title}} </h1><app-messages></app-messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
