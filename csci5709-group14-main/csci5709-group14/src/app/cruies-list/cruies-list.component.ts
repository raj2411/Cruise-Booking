/* Author: Krina Mistry - B00927702 kr981143@dal.ca  */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruiseService } from '../services/cruise.service';

@Component({
	selector: 'app-cruies-list',
	templateUrl: './cruies-list.component.html',
	styleUrls: ['./cruies-list.component.css'],
})
export class CruiesListComponent implements OnInit {
	cruiseList: any = [];

	constructor(private router: Router, private cruiseService: CruiseService) {}

	ngOnInit() {
		this.getCruiseListData();
	}

	getCruiseListData() {
		this.cruiseService.getCruiseList().subscribe((data: any) => {
			this.cruiseList = data;
		});
	}
}
