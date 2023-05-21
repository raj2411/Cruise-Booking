import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentdetailsComponent } from './rentdetails.component';

describe('RentdetailsComponent', () => {
  let component: RentdetailsComponent;
  let fixture: ComponentFixture<RentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
