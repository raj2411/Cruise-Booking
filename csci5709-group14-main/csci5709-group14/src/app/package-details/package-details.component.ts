import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
	gridColumns = 2;

	toggleGridColumns() {
		this.gridColumns = this.gridColumns === 3 ? 4 : 3;
	}

	public onClick() {
		this.router.navigate(['personalinfo']);
	}
}
