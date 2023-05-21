// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { TestBed } from '@angular/core/testing';

import { CarrersService } from './carrers.service';

describe('CarrersService', () => {
  let service: CarrersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
