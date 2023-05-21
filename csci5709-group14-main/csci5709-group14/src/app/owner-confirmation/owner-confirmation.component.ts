// Author: Karan Aggarwal (B00912580)

import { Component, OnInit } from '@angular/core';
import { CruisseLeaseService } from '../services/cruisse-lease.service';


@Component({
  selector: 'app-owner-confirmation',
  templateUrl: './owner-confirmation.component.html',
  styleUrls: ['./owner-confirmation.component.css']
})
export class OwnerConfirmationComponent implements OnInit {
  id: String = '';
  constructor(private leaseService: CruisseLeaseService) { }

  ngOnInit() {
    this.id = this.leaseService.getId();
    console.log(this.id);
  }

}
