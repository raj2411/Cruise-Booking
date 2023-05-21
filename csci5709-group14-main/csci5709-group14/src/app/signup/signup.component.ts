import { Component } from '@angular/core';
// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../Authentication/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
	signupForm!: FormGroup;
	submitted = false;
	hide: any;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.signupForm = this.formBuilder.group(
			{
				firstName: [
					'',
					[Validators.required, Validators.pattern('^[a-zA-Z]+$')],
				],
				lastName: [
					'',
					[Validators.required, Validators.pattern('^[a-zA-Z]+$')],
				],
				email: ['', [Validators.required, Validators.email]],
				password: [
					'',
					[
						Validators.required,
						Validators.minLength(8),
						Validators.pattern(
							'^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};:\\\\|,.<>\\/?]*)$'
						),
					],
				],
				confirmPassword: ['', Validators.required],
			},
			{
				validator: this.mustMatch('password', 'confirmPassword'),
			}
		);
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.signupForm.controls;
	}

	onSignup() {
		this.submitted = true;
		console.log(this.signupForm.status);
		if (this.signupForm.invalid) {
			console.log('invalid');
			return;
		}
		this.authService.addNewUser(this.signupForm.value);
	}

	// custom validator to check that two fields match
	mustMatch(controlName: string, matchingControlName: string) {
		return (formGroup: FormGroup) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];

			if (matchingControl.errors && !matchingControl.errors.mustMatch) {
				// return if another validator has already found an error on the matchingControl
				return;
			}

			// set error on matchingControl if validation fails
			if (control.value !== matchingControl.value) {
				matchingControl.setErrors({ mustMatch: true });
			} else {
				matchingControl.setErrors(null);
			}
		};
	}
}
