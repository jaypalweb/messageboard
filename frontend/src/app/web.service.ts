import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs';
//ref- https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
//ref-https://stackoverflow.com/questions/46630893/angular-res-json-is-not-a-function
@Injectable()

export class WebService {
    messages: any = [{ text: "some text", owner: "Tim" }, { text: "other message", owner: "Jane" }];
    constructor(private http: HttpClient) {

    }
    getMessages() {
        return this.http.get('http://localhost:63145/api/messages');
    }
}