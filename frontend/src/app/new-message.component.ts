import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
//ref- https://stackoverflow.com/questions/46705101/mat-form-field-must-contain-a-matformfieldcontrol
//ref - https://stackblitz.com/edit/angular-xpvwzf?file=app%2Fapp.component.html
@Component({
    selector: 'app-new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <input matInput value={{owner}} placeholder="Name">
                </mat-form-field>
                <mat-form-field>
                    <textarea matInput placeholder="Message"></textarea>
                </mat-form-field>
                <mat-card-actions>
                    <button (click)="post()" mat-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    
    `
})

export class NewMessageComponent {
    messages: any;
    owner: string = "John";
    constructor(private webService: WebService) {
    }
    post() {
        console.log(this.owner);
    }
}