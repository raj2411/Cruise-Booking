// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
	providedIn: 'root',
})
export class EventDetailsService {
	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	addEventDetail(eventData: any) {
		console.log('eventData', eventData);
		this.http.post(this.apiUrl + '/addEvent/', eventData).subscribe(
			(result) => {
				console.log('result: ', result);
			},
			(error) => console.log('error: ', error)
		);
	}

	getAllEvents() {
		console.log('getAllEvents');
		this.http.get(this.apiUrl + '/getEvents/').subscribe(
			(result) => {
				console.log('events: ', result);
			},
			(error) => console.log('error: ', error)
		);
	}

	getEventById(id: string) {
		this.http.get(this.apiUrl + '/getEventById/:id').subscribe(
			(result) => {
				console.log('event: ', result);
			},
			(error) => console.log('error: ', error)
		);
	}
	geteventDetailsById(id: string): Observable<any> {
		return this.http.get(this.apiUrl + '/getEventById/' + id);
	}
}
