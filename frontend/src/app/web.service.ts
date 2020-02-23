import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()

export class WebService {
    BASE_URL: string = 'http://localhost:63145/api';
    private messageStore: any = [];
    private messageSubject = new Subject();
    messages = this.messageSubject.asObservable();
    constructor(private http: HttpClient, private sb: MatSnackBar) {
        this.getMessages();
    }

    getMessages(user?) {
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(messages => {
            this.messageStore = messages;
            this.messageSubject.next(this.messageStore);
        }, err => {
            this.handleError('Unable to get messages');
        });
    }

    postMessage(message) {
        //message = { owner: "jay", text: "hello text" }
        return this.http.post(this.BASE_URL + '/messages', message).subscribe(onemessage => {
            this.messageStore.push(onemessage);
            this.messageSubject.next(this.messageStore);
        }, err => {
            this.handleError('Unable to post message');
        });
    }
    private handleError(error) {
        console.log(error);
        this.sb.open(error, 'close', { duration: 6000 });
    }
}