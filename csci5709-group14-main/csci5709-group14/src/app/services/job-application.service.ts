// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
	providedIn: 'root',
})
export class JobApplicationService {
	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	jobApplicationForm(data: any): Observable<any> {
		console.log('data' + JSON.stringify(data));
		return this.http.post(this.apiUrl + '/jobApplication/', data);
	}
}
