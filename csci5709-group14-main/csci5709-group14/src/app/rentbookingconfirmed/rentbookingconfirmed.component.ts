import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonalInformationService } from '../services/personal-information.service';


@Component({
  selector: 'app-rentbookingconfirmed',
  templateUrl: './rentbookingconfirmed.component.html',
  styleUrls: ['./rentbookingconfirmed.component.css']
})
export class RentbookingconfirmedComponent {
  booking: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personalinformationService : PersonalInformationService
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
