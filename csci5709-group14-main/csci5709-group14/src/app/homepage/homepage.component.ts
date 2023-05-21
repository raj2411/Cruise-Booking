// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { Component } from '@angular/core';
import { HomepageService } from '../services/homepage.service';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
	sourcesList: any = [];
	destinationList: any = [];
	happeningsList: any = [];
	id: any;

	public constructor(private cruiseDestinationService: HomepageService) {}

	ngOnInit() {
		this.getCruiseDestination();
		this.getCruiseSource();
		this.getEventDetails();
	}
	getCruiseSource() {
		this.cruiseDestinationService.CruiseSource().subscribe((data: any) => {
			data.forEach((element: { location: any }) => {
				this.sourcesList.push(element.location);
			});
		});
		console.log('sources' + this.sourcesList);
	}
	getCruiseDestination() {
		this.cruiseDestinationService
			.CruiseDestination()
			.subscribe((data: any) => {
				data.forEach((element: { location: any }) => {
					this.destinationList.push(element.location);
				});
			});
		console.log('destination' + this.destinationList);
	}

	getEventDetails() {
		this.cruiseDestinationService
			.getEventDetails()
			.subscribe((data: any) => {
				data.events.forEach((element: { event: any }) => {
					this.happeningsList.push(element);
					console.log(JSON.stringify(this.happeningsList));
				});
			});
		console.log(JSON.stringify(this.happeningsList));
	}
}
