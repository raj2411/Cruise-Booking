/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonalInformationService } from '../services/personal-information.service';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent {

  booking: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personalinformationService: PersonalInformationService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id: string = params['id'];
      this.personalinformationService.getBookingInformation(id).subscribe((data: any) => {
        console.log(data);
        this.booking = data;
      });
    });
  }
}
