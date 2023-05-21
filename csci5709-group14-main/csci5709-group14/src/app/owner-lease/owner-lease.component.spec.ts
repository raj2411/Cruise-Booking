import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLeaseComponent } from './owner-lease.component';

describe('OwnerLeaseComponent', () => {
  let component: OwnerLeaseComponent;
  let fixture: ComponentFixture<OwnerLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLeaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
