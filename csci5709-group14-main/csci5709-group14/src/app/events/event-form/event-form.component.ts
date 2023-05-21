// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { Component, OnInit } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { EventDetailsService } from 'src/app/services/event-details.service';

@Component({
	selector: 'app-event-form',
	templateUrl: './event-form.component.html',
	styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
	form!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private eventService: EventDetailsService
	) {}

	ngOnInit() {
		this.form = this.fb.group({
			contactDetails: this.fb.group({
				firstName: [null, Validators.required],
				lastName: [null, Validators.required],
				email: [null, [Validators.required, Validators.email]],
				phone: [null, Validators.required],
			}),
			event: this.fb.group({
				name: [null, Validators.required],
				location: [null, Validators.required],
				date: [null, Validators.required],
				time: [null, Validators.required],
			}),
			details: this.fb.group({
				description: [null, Validators.required],
				highlights: this.fb.array([]),
				additionalDetails: [null, Validators.required],
			}),
		});
	}

	get highlights(): FormArray {
		return this.form.get('details.highlights') as FormArray;
	}

	addHighlight(): void {
		this.highlights.push(this.fb.control('', Validators.required));
	}

	removeHighlight(index: number): void {
		this.highlights.removeAt(index);
	}

	get contactDetails(): FormGroup {
		return this.form.get('contactDetails') as FormGroup;
	}

	get event(): FormGroup {
		return this.form.get('event') as FormGroup;
	}

	get details(): FormGroup {
		return this.form.get('details') as FormGroup;
	}

	createEvent(): void {
		console.log(this.form.value);
		if (this.form.invalid) {
			console.log('invalid');
			return;
		}
		this.eventService.addEventDetail(this.form.value);
	}
}
