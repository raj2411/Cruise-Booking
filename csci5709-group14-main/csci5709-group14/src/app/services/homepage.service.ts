// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
	providedIn: 'root',
})
export class HomepageService {
	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	CruiseSource(): Observable<any> {
		return this.http.get(this.apiUrl + '/cruiseSource/');
	}

	CruiseDestination(): Observable<any> {
		return this.http.get(this.apiUrl + '/cruiseDestination/');
	}
	getEventDetails(): Observable<any> {
		return this.http.get(this.apiUrl + '/getEvents/');
	}
}
