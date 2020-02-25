import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {
    BASE_URL: string = 'http://localhost:63145/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient) {
    }

    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    register(user) {
        delete user.confirmPassword;
        return this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            localStorage.setItem(this.TOKEN_KEY, res['token']);
            localStorage.setItem(this.NAME_KEY, res['firstName']);
        });
    }

}