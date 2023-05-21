// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { TestBed } from '@angular/core/testing';

import { JobApplicationService } from './job-application.service';

describe('JobApplicationService', () => {
  let service: JobApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
