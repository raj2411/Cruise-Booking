/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonalInformationService } from '../services/personal-information.service';
import { CruiseService } from '../services/cruise.service';


@Component({
	selector: 'app-personal-information',
	templateUrl: './personal-information.component.html',
	styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
	personalInformation: any = {
		Name: '',
		DOB: '',
		Email: '',
		PhoneNumber: '',
		Address: ''
	};

	//TODO? use below for showing errors.
	nameFail = false;
	dobFail = false;
	emailFail = false;
	phoneFail = false;
	addressFail = false;

	cruise: any;
	cruiseDetails: any;
	suiteDetails: any;

	constructor(private readonly router: Router, 
			private cruiseService: CruiseService,
			private activatedRoute: ActivatedRoute,
			private personalinformationService: PersonalInformationService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params['id'];
			const suiteType: string = params['type'];
			this.getCruiseDetails(id, suiteType);
		});
	 }

	getCruiseDetails(id: string, suiteType: string) {
		this.cruiseService.getCruiseById(id).subscribe((data: any) => {
			this.cruise = data;
		});
		this.cruiseService.getCruiseDetails(id).subscribe((data: any) => {
			this.cruiseDetails = data;
			this.cruiseDetails.suites.map((data: any) => {
				if(data.type == suiteType) {
					this.suiteDetails = data;
				}
			})
		});
	}

	onSubmit(f: NgForm) {
		console.log(this.personalInformation);
		this.personalinformationService.postPersonalInformation(this.personalInformation).subscribe((data: any) => {
			const bookingdata = {
				name: this.cruise.title,
				cruiseid: this.cruise._id,
				suitetype: this.suiteDetails.type,
				base_amount: this.suiteDetails.price,
				tax_amount: +this.suiteDetails?.price * 0.15,
				total_amount: +this.suiteDetails?.price + +this.suiteDetails?.price * 0.15
			};
			this.personalinformationService.postBookingInfromation(bookingdata, data.booking._id).subscribe((data: any) => {
				this.router.navigate(['paymentdetails', data.booking._id]);
			});
		});
	}

	checkNumeric(event: any) {
		if (event.keyCode > 47 && event.keyCode < 58) {
			return true;
		}
		return false;
	}

	checkAlpha(event: any) {
		console.log("Key Pressed");
		if (
			(event.keyCode > 64 && event.keyCode < 91) ||
			(event.keyCode > 96 && event.keyCode < 123)
		) {
			return true;
		}
		return false;
	}
}