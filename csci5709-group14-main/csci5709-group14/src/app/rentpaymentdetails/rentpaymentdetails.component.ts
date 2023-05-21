import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonalInformationService } from '../services/personal-information.service';
@Component({
  selector: 'app-rentpaymentdetails',
  templateUrl: './rentpaymentdetails.component.html',
  styleUrls: ['./rentpaymentdetails.component.css']
})
export class RentpaymentdetailsComponent {
  cardnumber = '';
	name = '';
	cvv = '';
	expdate = '';
	cvvFail = false;
	nameFail = false;
	cardnumberFail = false;
	expdateFail = false;
	cruiseIdError = 'Please enter the Cruise ID.';

	bookingReferenceId: any;

	constructor(private readonly router: Router, private activatedRoute: ActivatedRoute,
		private personalinformationService: PersonalInformationService) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params['id'];
			this.bookingReferenceId = id;
		});
	}

	onSubmit(f: NgForm) {
		const data = {
			cardnumber: this.cardnumber,
			name: this.name,
			expiration: this.expdate,
			cvv: this.cvv
		};
		this.personalinformationService.postCardInformation(data, this.bookingReferenceId).subscribe((data: any) => {
      this.router.navigate(['rentbookingconfirmation', this.bookingReferenceId]);
		});
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
}
