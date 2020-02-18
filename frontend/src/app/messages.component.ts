import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'app-messages',
    template: `
    <div *ngFor="let message of messages">
        <mat-card style="margin:8px;">
            <mat-card-title>{{message.owner}}</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})

export class MessagesComponent {
    constructor(private webService: WebService) {

    }

    ngOnInit() {
        //var res = webService.getMessages();
        //console.log('res-dev:', res);
        //var response = this.webService.getMessages();
        //console.log('info:', response);
    }
    messages = [{ text: "some text", owner: "Tim" }, { text: "other message", owner: "Jane" }];
}