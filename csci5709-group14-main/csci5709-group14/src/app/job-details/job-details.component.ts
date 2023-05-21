// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig,MatDialogRef  } from '@angular/material/dialog';
import { JobDetailsService } from '../services/job-details.service';
import { JobFormComponent } from '../job-form/job-form.component';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  JobDetails: any;
  dialogConfig = new MatDialogConfig();
  modalWin: MatDialogRef<JobFormComponent, any> | undefined;


  constructor(private jsonJobDetails: JobDetailsService,public matDialog: MatDialog) {
    this.JobDetails = jsonJobDetails.jobJson;
  }

  openModal() {
    this.modalWin = this.matDialog.open(JobFormComponent,{width: '100%',
    maxHeight: 'calc(100vh - 200px)'});
  }

  


}
