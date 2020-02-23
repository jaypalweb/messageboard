import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
    .error{
        background-color:#fff0f0;
    }
    `]
})
export class RegisterComponent {
    form;
    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''

        });
    }
    onSubmit() {
        console.log(this.form.valid);
        console.log(this.form.value);
    }

    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}
