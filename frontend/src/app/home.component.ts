import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
  <app-new-message></app-new-message>
  <app-messages></app-messages>
  `,
    styleUrls: ['./app.component.css']
})
export class HomeComponent { }
