import { Component } from '@angular/core';
import { WebService } from './web.service';
//ref- https://stackoverflow.com/questions/46705101/mat-form-field-must-contain-a-matformfieldcontrol
//ref - https://stackblitz.com/edit/angular-xpvwzf?file=app%2Fapp.component.html
@Component({
    selector: 'app-user',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <input matInput [(ngModel)]="model.firstName" placeholder="First Name">
                </mat-form-field>
                <mat-form-field>
                    <input matInput [(ngModel)]="model.lastName" placeholder="Last Name">
                </mat-form-field>
                <mat-card-actions>
                    <button (click)="post()" mat-raised-button color="primary">Save Changes</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})

export class UserComponent {
    constructor(private webService: WebService) {
    }
    ngOnInit() {
        this.webService.getUser().subscribe(res => {
            this.model.firstName = res['firstName']; //note dot oprtator shows issues - res.firstName
            this.model.lastName = res['lastName'];
        })
    }
    model = { firstName: "", lastName: "" };
    post() {
        this.webService.saveUser(this.model).subscribe();
    }
}