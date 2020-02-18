import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//ref- https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
@Injectable()

export class WebService {
    messages: any = [{ text: "some text", owner: "Tim" }, { text: "other message", owner: "Jane" }];
    constructor(private http: HttpClient) {

    }
    getMessages() {
        //return this.messages;
        this.http.get('http://localhost:1234/api/messages').subscribe(result => {
            return result;
        });
        //not working --return this.http.get('http://localhost:1234/api/messages').toPromise();
    }
}