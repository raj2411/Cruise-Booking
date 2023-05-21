// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { Component, OnInit } from '@angular/core';

import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Authentication/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;
	hide: any;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
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
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	onLogin() {
		console.log(this.loginForm);
		this.submitted = true;
		console.log('loginForm status', this.loginForm.status);

		if (this.loginForm.invalid) {
			return;
		}

		this.authService.login(this.loginForm.value);
	}
}
