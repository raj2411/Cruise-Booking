import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from './backend-url';

@Injectable({
  providedIn: 'root'
})
export class CruisseLeaseService {

  id: String = '';
  apiUrl = BACKEND_URL;

  constructor(private http: HttpClient) {

  }

  getId(){
    console.log(this.id + 'k');
    return this.id;
  }

  setId(id: String){
    console.log(this.id + 'a');
    this.id = id;
  }

  getLeaseList(): Observable<any> {
		return this.http.get(this.apiUrl + '/leaselist/');
	}

	getLeaseById(id: string): Observable<any> {
		return this.http.get(this.apiUrl + '/leaselist/' + id);
	}

}
