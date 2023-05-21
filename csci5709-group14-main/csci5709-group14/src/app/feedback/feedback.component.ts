// Author: Karan Aggarwal (B00912580)

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-feedback',
	templateUrl: './feedback.component.html',
	styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
	name = '';
	email = '';
	phone = '';
	feedback = '';
	companyname = '';
	submitted = false;
	nameFail = false;
	emailFail = false;
	phoneFail = false;
	feedbackFail = false;
	validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	constructor(
		private readonly router: Router,
		private readonly http: HttpClient
	) {}

	ngOnInit() {}
	onSubmit(f: NgForm) {
		this.emailFail = false;
		if (this.checkformValidation()) {
			const data = {
				name: this.name,
				phone: this.phone,
				email: this.email,
				feedback: this.feedback,
			};
			this.http
				.post('https://hfxcruise-group14-backend.onrender.com/api/feedback', data)
				.subscribe((response) => {
					console.log(response);
					this.router.navigate(['/feedbacktaken']);
				});
		}

		this.submitted = true;
	}
	checkformValidation() {
		if (!this.email.match(this.validRegex)) {
			this.emailFail = true;
			return false;
		} else if (
			this.name.length > 0 &&
			this.phone.length > 0 &&
			this.feedback.length > 0
		) {
			return true;
		}
		return false;
	}

	checkNumeric(event: any) {
		if (event.keyCode > 47 && event.keyCode < 58) {
			return true;
		}
		return false;
	}
	checkAlpha(event: any) {
		if (
			(event.keyCode > 64 && event.keyCode < 91) ||
			(event.keyCode > 96 && event.keyCode < 123)
		) {
			return true;
		}
		return false;
	}
}
