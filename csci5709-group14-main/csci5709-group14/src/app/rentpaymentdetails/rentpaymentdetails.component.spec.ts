import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentpaymentdetailsComponent } from './rentpaymentdetails.component';

describe('RentpaymentdetailsComponent', () => {
  let component: RentpaymentdetailsComponent;
  let fixture: ComponentFixture<RentpaymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentpaymentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentpaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
