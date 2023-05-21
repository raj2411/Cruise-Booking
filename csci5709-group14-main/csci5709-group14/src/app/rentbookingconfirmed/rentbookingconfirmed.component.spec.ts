import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentbookingconfirmedComponent } from './rentbookingconfirmed.component';

describe('RentbookingconfirmedComponent', () => {
  let component: RentbookingconfirmedComponent;
  let fixture: ComponentFixture<RentbookingconfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentbookingconfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentbookingconfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
