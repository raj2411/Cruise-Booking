// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { TestBed } from '@angular/core/testing';

import { EventDetailsService } from './event-details.service';

describe('EventDetailsService', () => {
	let service: EventDetailsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(EventDetailsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
