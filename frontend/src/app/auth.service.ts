import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {
    BASE_URL: string = 'http://localhost:63145/auth';
    constructor(private http: HttpClient) {
    }

    register(user) {
        delete user.confirmPassword;
        return this.http.post(this.BASE_URL + '/register', user).subscribe();
    }

}