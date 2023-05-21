import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CruisseLeaseService } from '../services/cruisse-lease.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-rentdetails',
  templateUrl: './rentdetails.component.html',
  styleUrls: ['./rentdetails.component.css']
})
export class RentdetailsComponent implements OnInit {
	gridColumns = 2;
	cruise: any = {};
  base = 0;
  tax = 0;
  total = 0;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private lesaseService: CruisseLeaseService
	) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: string = params['id'];
      console.log(params);
			this.getLeaseDetails(id);
		});
    console.log(this.cruise);
    this.base = this.cruise.rooms * 500;
    this.tax = this.base * 0.15;
    this.total = this.base * 1.15;
	}

	getLeaseDetails(id: string) {
		this.lesaseService.getLeaseById(id).subscribe((data: any) => {
			this.cruise = data;
		});
  }

	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}

	public onClick() {
		this.router.navigate(['/rentpersonalinfo'], this.cruise._id);
	}
}
