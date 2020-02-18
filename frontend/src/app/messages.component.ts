import { Component, OnInit } from '@angular/core';
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

export class MessagesComponent implements OnInit {
    messages: any;
    constructor(private webService: WebService) {
    }
    ngOnInit() {
        this.getMessages();

    }
    getMessages() {
        this.webService
            .getMessages()
            .subscribe(messages => {
                this.messages = messages;
                console.log(this.messages);
            });
    }
}