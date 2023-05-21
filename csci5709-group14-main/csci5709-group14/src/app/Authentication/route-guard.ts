// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class RouteGuard implements CanActivate {
	constructor(private authService: AuthService, private route: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const isAuthenticated = this.authService.getIsAuthenticated();
		if (!isAuthenticated) {
			this.route.navigate(['/login']);
		}
		return isAuthenticated;
	}
}
