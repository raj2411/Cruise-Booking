import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiesDetailsComponent } from './cruies-details.component';

describe('CruiesDetailsComponent', () => {
  let component: CruiesDetailsComponent;
  let fixture: ComponentFixture<CruiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
