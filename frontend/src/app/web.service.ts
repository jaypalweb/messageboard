import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs';
//ref- https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
//ref-https://stackoverflow.com/questions/46630893/angular-res-json-is-not-a-function
@Injectable()

export class WebService {
    BASE_URL: string = 'http://localhost:63145/api';

    constructor(private http: HttpClient) {
    }

    getMessages() {
        return this.http.get(this.BASE_URL + '/messages');
    }

    postMessage(message) {
        //console.log('Jay Message', message);
        //message = { owner: "jay", text: "hello text" }
        return this.http.post(this.BASE_URL + '/messages', message).subscribe();
    }
}