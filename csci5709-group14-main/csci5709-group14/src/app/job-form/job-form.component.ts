// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JobDetailsService } from '../services/job-details.service';
import { JobApplicationService } from '../services/job-application.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  requiredForm!: FormGroup;
  formSubmitted: boolean = false;
  jobformsuccess: boolean = false;
  jobdetails: any;

  constructor(
    public dialogRef: MatDialogRef<JobFormComponent>, private fb: FormBuilder,private jobApplicationService: JobApplicationService, private jsonJobDetails: JobDetailsService) {
    this.jobdetails = jsonJobDetails.jobJson;
    }

  ngOnInit() {
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({
      Firstname: ['', [Validators.required, Validators.pattern("^[A-Za-z]+$")]],
      Lastname: ['', [Validators.required, Validators.pattern("^[A-Za-z]+$")]],
      Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Contact: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      fileupload: ['', [Validators.required]],
      Address: ['', [Validators.required]]
    });
  }

  formSubmit() {
    this.formSubmitted = true;
    console.log(this.requiredForm.value)
    if (this.requiredForm.status == "VALID") {
      this.jobApplicationService.jobApplicationForm(this.requiredForm.value).subscribe((data: any) => {
        this.formSubmitted = false;
        this.jobformsuccess = true;
      });

    }
  }


  get Firstname(): FormControl {
    return this.requiredForm.get("Firstname") as FormControl;
  }

  get Lastname(): FormControl {
    return this.requiredForm.get("Lastname") as FormControl;
  }

  get Email(): FormControl {
    return this.requiredForm.get("Email") as FormControl;
  }
  get Contact(): FormControl {
    return this.requiredForm.get("Contact") as FormControl;
  }
  get fileupload(): FormControl {
    return this.requiredForm.get("fileupload") as FormControl;
  }
  get Address(): FormControl {
    return this.requiredForm.get("Address") as FormControl;
  }

  closeModal() {
    this.dialogRef.close();
  }

}
