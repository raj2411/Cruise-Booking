/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CruiseService } from '../services/cruise.service';

@Component({
	selector: 'app-cruies-details',
	templateUrl: './cruies-details.component.html',
	styleUrls: ['./cruies-details.component.css'],
})
export class CruiesDetailsComponent implements OnInit {
	gridColumns = 2;
	cruiseDetails: any = {};
	cruise: any = {};

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private cruiseService: CruiseService
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params['id'];
			this.getCruiseDetails(id);
		});
	}

	getCruiseDetails(id: string) {
		this.cruiseService.getCruiseById(id).subscribe((data: any) => {
			this.cruise = data;
		});
		this.cruiseService.getCruiseDetails(id).subscribe((data: any) => {
			this.cruiseDetails = data;
		});
	}

	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}

	public onClick(type: any) {
		this.router.navigate(['personalinfo', this.cruise._id, type]);
	}
}
