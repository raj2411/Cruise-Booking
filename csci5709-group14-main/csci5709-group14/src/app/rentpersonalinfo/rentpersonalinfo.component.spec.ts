import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentpersonalinfoComponent } from './rentpersonalinfo.component';

describe('RentpersonalinfoComponent', () => {
  let component: RentpersonalinfoComponent;
  let fixture: ComponentFixture<RentpersonalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentpersonalinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentpersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
