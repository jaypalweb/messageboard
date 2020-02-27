import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
    BASE_URL: string = 'http://localhost:63145/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient, private router: Router) {
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

    login(loginData) {
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
            this.authenticate(res);
        });
    }
    register(user) {
        delete user.confirmPassword;
        return this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);
    }

    authenticate(res) {
        var authResponse = res;
        if (!authResponse['token']) {
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, authResponse['token']);
        localStorage.setItem(this.NAME_KEY, authResponse['firstName']);
        this.router.navigate(['/']);
    }

}