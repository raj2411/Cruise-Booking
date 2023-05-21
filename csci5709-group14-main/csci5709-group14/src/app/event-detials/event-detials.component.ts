// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsService } from '../services/event-details.service';

@Component({
	selector: 'app-event-detials',
	templateUrl: './event-detials.component.html',
	styleUrls: ['./event-detials.component.css'],
})
export class EventDetialsComponent implements OnInit {
	eventDetail: any;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private eventDetailService: EventDetailsService
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params['id'];
			this.getEventDetails(id);
		});
	}
	getEventDetails(id: string) {
		this.eventDetailService
			.geteventDetailsById(id)
			.subscribe((data: any) => {
				console.log(
					'event' +
						JSON.stringify(data.events.contactDetails.firstName)
				);
				this.eventDetail = data;
			});
	}
}
