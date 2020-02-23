import { Component } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    form;
    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''

        });
    }
    onSubmit() {
        console.log(this.form.value);
    }
}
