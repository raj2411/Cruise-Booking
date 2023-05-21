// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { BACKEND_URL } from '../services/backend-url';
import { IUser } from '../signup/IUser';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	apiUrl = BACKEND_URL;

	private token!: string;

	private authSubscription = new Subject<boolean>();
	private isAuthenticated = false;
	private logoutTimer: any;
	private userProfile: { [key: string]: string | null } = {};

	constructor(private http: HttpClient, private router: Router) {}

	setUserProfile(userProfile: { [key: string]: string | null }) {
		this.userProfile = userProfile;
		localStorage.setItem('userProfile', JSON.stringify(userProfile));
	}

	getUserProfile(): { [key: string]: string | null } {
		try {
			const userProfile = localStorage.getItem('userProfile');
			return userProfile ? JSON.parse(userProfile) : {};
		} catch (error) {
			console.error(
				'Error parsing user profile from local storage:',
				error
			);
			return {};
		}
	}

	getIsAuthenticated() {
		return this.isAuthenticated;
	}

	getAuthenticatedSub() {
		return this.authSubscription.asObservable();
	}

	getToken() {
		return this.token;
	}

	addNewUser(user: IUser) {
		this.http.post(this.apiUrl + '/addNewUser/', user).subscribe(
			(result) => {
				console.log('result: ', result),
					this.router.navigate(['/login']);
			},
			(error) => console.log('error: ', error)
		);
	}

	login(email: string) {
		this.http
			.post<{ user: any; token: string; expiresIn: number }>(
				this.apiUrl + '/login/',
				email
			)
			.subscribe(
				(result) => {
					console.log('result: ', result);
					this.setUserProfile(result.user);
					this.token = result.token;
					if (this.token) {
						this.authSubscription.next(true);
						this.isAuthenticated = true;
						this.router.navigate(['/']);
						this.logoutTimer = setTimeout(() => {
							this.logout();
						}, result.expiresIn * 1000);

						const now = new Date();
						const expDate = new Date(
							now.getTime() + result.expiresIn * 1000
						);
						this.storeAuthDetails(this.token, expDate);
					}
				},
				(error) => console.log('error: ', error)
			);
	}

	updateUserProfile(updatedUser: {
		[key: string]: string | null;
	}): Observable<any> {
		return this.http.put(this.apiUrl + '/updateUser/', updatedUser).pipe(
			tap((response: any) => {
				this.setUserProfile(response.user);
			})
		);
	}

	deleteUserAccount(userId: string) {
		this.http.delete(`${this.apiUrl}/deleteAccount/${userId}`);
		this.logout();
	}

	logout() {
		this.token = '';
		this.isAuthenticated = false;
		this.authSubscription.next(false);
		this.router.navigate(['/login']);
		clearTimeout(this.logoutTimer);
		this.clearAuthDetails();
	}

	storeAuthDetails(token: string, expDate: Date) {
		localStorage.setItem('token', token);
		localStorage.setItem('expiresIn', expDate.toISOString());
	}

	clearAuthDetails() {
		localStorage.removeItem('token');
		localStorage.removeItem('expiresIn');
	}

	getLocalStorageData() {
		const token = localStorage.getItem('token');
		const expiresIn = localStorage.getItem('expiresIn');

		if (!token || !expiresIn) {
			return;
		}

		return {
			token: token,
			expiresIn: new Date(expiresIn),
		};
	}

	authFromLocalStorage() {
		const localAuthData = this.getLocalStorageData();
		if (localAuthData) {
			const now = new Date();
			const expiresIn = localAuthData.expiresIn.getTime() - now.getTime();

			if (expiresIn > 0) {
				this.token = localAuthData.token;
				this.isAuthenticated = true;
				this.authSubscription.next(true);
				this.userProfile = this.getUserProfile();
				this.logoutTimer = setTimeout(() => {
					this.logout();
				}, expiresIn);
			}
		}
	}
}
