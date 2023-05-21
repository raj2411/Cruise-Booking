import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CruisseLeaseService } from '../services/cruisse-lease.service';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrls: ['./rentlist.component.css']
})
export class RentlistComponent {
  boats: any = [];

	constructor(private router: Router, private leaseService: CruisseLeaseService) {}

  ngOnInit() {
		this.getCruiseListData();
	}

	getCruiseListData() {
		this.leaseService.getLeaseList().subscribe((data: any) => {
			this.boats = data;
		});
	}

gridColumns = 3;

toggleGridColumns() {
  this.gridColumns = this.gridColumns === 3 ? 4 : 3;
}


title = 'halifaxcruise';


}
