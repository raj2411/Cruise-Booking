import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public onClick(id: number) {
		this.router.navigate(['packagedetails']);
	}

}
