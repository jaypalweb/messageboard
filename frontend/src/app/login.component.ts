import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    template: `
    <mat-card>
        <mat-form-field>
            <input matInput [(ngModel)]="loginData.email" placeholder="Email">
        </mat-form-field>
        <mat-form-field>
            <input matInput [(ngModel)]="loginData.password" placeholder="Password">
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
    `
})

export class LoginComponent {
    constructor(private auth: AuthService) { }
    loginData = {
        'email': '',
        'password': ''
    }
    login() {
        //console.log(this.loginData);
        this.auth.login(this.loginData);
    }
}