// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { Component } from '@angular/core';
import { AuthService } from '../Authentication/auth.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
	user: { [key: string]: string | null };
	showSuccessMessage = false;

	constructor(private authService: AuthService) {
		this.user = this.authService.getUserProfile();
	}

	editMode: boolean = false;

	toggleEditOn() {
		this.editMode = true;
	}

	updateUserProfile() {
		if (this.user) {
			this.editMode = false;
			this.authService.updateUserProfile(this.user).subscribe(
				(response) => {
					console.log('User updated successfully:', response);
					this.showSuccessMessage = true;
				},
				(error) => {
					console.error('Error updating user:', error);
				}
			);
			this.editMode = false;
		}
	}

	deleteAccount() {
		if (confirm('Are you sure you want to delete your account?')) {
			const userId = this.user && this.user.id;
			console.log('first');
			if (userId) {
				console.log('second');
				// this.authService.deleteUserAccount(userId);
			}
		}
	}
}
