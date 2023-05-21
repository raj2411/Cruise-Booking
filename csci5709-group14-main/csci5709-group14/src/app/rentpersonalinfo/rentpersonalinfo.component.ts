import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonalInformationService } from '../services/personal-information.service';
import { CruisseLeaseService } from '../services/cruisse-lease.service';


@Component({
  selector: 'app-rentpersonalinfo',
  templateUrl: './rentpersonalinfo.component.html',
  styleUrls: ['./rentpersonalinfo.component.css']
})

export class RentpersonalinfoComponent implements OnInit {
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
			private leaseService: CruisseLeaseService,
			private activatedRoute: ActivatedRoute,
			private personalinformationService: PersonalInformationService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params['id'];
      console.log(id);
			this.getLeaseDetails(id);
		});
	 }

	getLeaseDetails(id: string) {
		this.leaseService.getLeaseById(id).subscribe((data: any) => {
			this.cruise = data;
		});
    console.log(this.cruise)
	}

	onSubmit(f: NgForm) {
		console.log(this.personalInformation);
		this.personalinformationService.postPersonalInformation(this.personalInformation).subscribe((data: any) => {
			const bookingdata = {
				name: this.cruise.cruisename,
				cruiseid: this.cruise.cruiseid,
        fromavailable: this.cruise.fromavailable,
        toavailable : this.cruise.toavailable,
        rooms: this.cruise.rooms,
				base_amount: this.cruise?.rooms*500,
				tax_amount: +this.cruise?.rooms * 0.15*500,
				total_amount: +this.cruise?.rooms*500 + +this.cruise?.rooms * 0.15*500
			};
      console.log(this.cruise.cruisename);
      console.log(this.cruise.cruiseid);
			this.personalinformationService.postRentBookingInfromation(bookingdata, data.booking._id).subscribe((data: any) => {
				this.router.navigate(['rentpaymentdetails', data.booking._id]);
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

