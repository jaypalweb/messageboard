import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'
@Injectable()

export class WebService {
    BASE_URL: string = 'http://localhost:63145/api';
    messages: any = [];
    constructor(private http: HttpClient, private sb: MatSnackBar) {
        this.getMessages();
    }

    getMessages() {
        this.http.get(this.BASE_URL + '/messages').subscribe(messages => {
            this.messages = messages;
        }, err => {
            this.handleError('Unable to get messages');
        });
    }

    postMessage(message) {
        //message = { owner: "jay", text: "hello text" }
        return this.http.post(this.BASE_URL + '/messages', message).subscribe(onemessage => {
            this.messages.push(onemessage);
        }, err => {
            this.handleError('Unable to post message');
        });
    }
    private handleError(error) {
        console.log(error);
        this.sb.open(error, 'close', { duration: 6000 });
    }
}