// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
	providedIn: 'root',
})
export class CarrersService {
	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	CareersList(): Observable<any> {
		return this.http.get(this.apiUrl + '/careersList/');
	}

	JobLocations(): Observable<any> {
		return this.http.get(this.apiUrl + '/jobLocations/');
	}

	JobTitles(): Observable<any> {
		return this.http.get(this.apiUrl + '/jobTitles/');
	}
}
