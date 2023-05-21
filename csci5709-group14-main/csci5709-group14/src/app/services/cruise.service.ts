/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
	providedIn: 'root',
})
export class CruiseService {
	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	getCruiseList(): Observable<any> {
		return this.http.get(this.apiUrl + '/cruiselist/');
	}

	getCruiseById(id: string): Observable<any> {
		return this.http.get(this.apiUrl + '/cruiselist/' + id);
	}

	getCruiseDetails(id: string): Observable<any> {
		return this.http.get(this.apiUrl + '/cruisedetail/' + id);
	}
}
