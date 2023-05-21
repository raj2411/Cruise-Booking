// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const token = this.authService.getToken();

		if (!token) {
			return next.handle(request);
		}
		const authRequest = request.clone({
			headers: request.headers.set('authorization', token),
		});
		return next.handle(authRequest);
	}
}
