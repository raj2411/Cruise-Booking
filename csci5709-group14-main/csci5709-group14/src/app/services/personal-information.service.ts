/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

	apiUrl = BACKEND_URL;

	constructor(private http: HttpClient) {}

	postPersonalInformation(data: any): Observable<any> {
		return this.http.post(this.apiUrl + '/booking/personalinformation/', data);
	}

	postCardInformation(data: any, id: string): Observable<any> {
		return this.http.post(this.apiUrl + '/booking/payment/' + id, data);
	}

	postBookingInfromation(data: any, id: string) : Observable<any> {
		return this.http.post(this.apiUrl + '/booking/' + id, data);
	}

  postRentBookingInfromation(data: any, id: string) : Observable<any> {
		return this.http.post(this.apiUrl + '/rentbooking/' + id, data);
	}

	getBookingInformation(id: string) : Observable<any> {
		return this.http.get(this.apiUrl + '/booking/' + id);
	}
}
