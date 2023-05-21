// Author: Karan Aggarwal (B00912580)
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Cruiseowner } from '../services/cruiseowner';
import { CruisseLeaseService } from '../services/cruisse-lease.service';

@Component({
	selector: 'app-owner-lease',
	templateUrl: './owner-lease.component.html',
	styleUrls: ['./owner-lease.component.css'],
})
export class OwnerLeaseComponent implements OnInit {
	cruiseowner?: Cruiseowner;
	id: string = '';
	cruisename = '';
	year = '';
	model = '';
	capacity = 0;
	rooms = 0;
	fromavailability = '';
	toavailability = '';
	firstname = '';
	lastname = '';
	email = '';
	phone = '';
	companyname = '';
	rnumber = '';
	formfilled = false;
	disablebox = false;
	idfilled = false;
	cruiseiderror = 'Please enter the Cruise ID.';

	constructor(
		private readonly router: Router,
		private readonly http: HttpClient,
		private leaseService: CruisseLeaseService
	) {}

	ngOnInit() {
		this.id = '';
	}
	onSubmit(f: NgForm) {
		this.formfilled = true;
		if (this.id) {
			this.http
				.post(
					'https://hfxcruise-group14-backend.onrender.com/api/cruiseleaseupdate',
					{
						cruiseID: this.id,
						fromavailability: this.fromavailability,
						toavailability: this.toavailability,
					}
				)
				.subscribe((response) => {
					console.log(response);
					this.router.navigate(['/ownerUpdate']);
				});
		} else if (this.checkValidation()) {
			const cruiseID = Math.random().toString(36).slice(2);
			this.cruiseowner = {
				cruiseID: cruiseID,
				cruisename: this.cruisename,
				year: this.year,
				model: this.model,
				capacity: this.capacity,
				rooms: this.rooms,
				fromavailability: this.fromavailability,
				toavailability: this.toavailability,
				firstname: this.firstname,
				lastname: this.lastname,
				email: this.email,
				phone: this.phone,
				companyname: this.companyname,
				rnumber: this.rnumber,
			};
			console.log(this.cruiseowner);
			this.http
				.post(
					'https://hfxcruise-group14-backend.onrender.com/api/cruiseleaseregistration',
					this.cruiseowner
				)
				.subscribe((response) => {
					console.log(response);
					this.leaseService.setId(cruiseID);
					this.router.navigate(['/ownerconfirmation']);
				});
		}
	}

	onSubmitlease() {
		this.idfilled = true;
		if (this.id.length > 0) {
			const cruiseId = {
				cruiseID: this.id,
			};
			this.http
				.post<Cruiseowner>(
					'https://hfxcruise-group14-backend.onrender.com/api/cruiseleasefetch',
					cruiseId
				)
				.subscribe(
					(response) => {
						this.id = response.cruiseID;
						this.cruisename = response.cruisename;
						this.year = response.year;
						this.model = response.model;
						this.capacity = response.capacity;
						this.rooms = response.rooms;
						this.fromavailability = response.fromavailability;
						this.toavailability = response.toavailability;
						this.firstname = response.firstname;
						this.lastname = response.lastname;
						this.email = response.email;
						this.phone = response.phone;
						this.companyname = response.companyname;
						this.rnumber = response.rnumber;
						this.disablebuttons();
					},
					(error) => {
						this.id = '';
						this.cruiseiderror = 'Please enter correct cruise ID';
					}
				);
		}
	}

	disablebuttons() {
		this.disablebox = true;
	}

	onCancel() {
		const cancelID = {
			cruiseID: this.id,
		};
		this.http
			.post(
				'https://hfxcruise-group14-backend.onrender.com/api/cruiseleasedelete',
				cancelID
			)
			.subscribe((response) => {
				this.router.navigate(['/ownerCancel']);
			});
	}

	checkAlphanumeric(event: any) {
		if (
			(event.keyCode > 47 && event.keyCode < 58) ||
			(event.keyCode > 64 && event.keyCode < 91) ||
			(event.keyCode > 96 && event.keyCode < 123)
		) {
			return true;
		}
		return false;
	}
	checkNumeric(event: any) {
		if (event.keyCode > 47 && event.keyCode < 58) {
			return true;
		}
		return false;
	}
	checkAlpha(event: any) {
		if (
			(event.keyCode > 64 && event.keyCode < 91) ||
			(event.keyCode > 96 && event.keyCode < 123)
		) {
			return true;
		}
		return false;
	}

	checkValidation() {
		if (
			this.cruisename.length < 1 ||
			this.year.length < 1 ||
			this.model.length < 1 ||
			this.capacity < 1 ||
			this.rooms < 1 ||
			this.fromavailability.length < 1 ||
			this.toavailability.length < 1 ||
			this.firstname.length < 1 ||
			this.lastname.length < 1 ||
			this.email.length < 1 ||
			this.phone.length < 1
		) {
			return false;
		}
		return true;
	}
}
