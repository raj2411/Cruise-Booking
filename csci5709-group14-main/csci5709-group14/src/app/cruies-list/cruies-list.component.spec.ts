import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiesListComponent } from './cruies-list.component';

describe('CruiesListComponent', () => {
  let component: CruiesListComponent;
  let fixture: ComponentFixture<CruiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CruiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
