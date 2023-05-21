// Author: Akash Gupta - B00912118 - ak459448@dal.ca

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseCareersComponent } from './cruise-careers.component';

describe('CruiseCareersComponent', () => {
  let component: CruiseCareersComponent;
  let fixture: ComponentFixture<CruiseCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseCareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiseCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
