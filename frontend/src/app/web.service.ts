import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {
    BASE_URL: string = 'http://localhost:63145/api';
    messages: any = [];
    constructor(private http: HttpClient) {
        this.getMessages();
    }

    getMessages() {
        this.http.get(this.BASE_URL + '/messages').subscribe(messages => {
            this.messages = messages;
            console.log(this.messages);
        });
    }

    postMessage(message) {
        //message = { owner: "jay", text: "hello text" }
        return this.http.post(this.BASE_URL + '/messages', message).subscribe(onemessage => {
            this.messages.push(onemessage);
            console.log(this.messages);
        });
    }
}