import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetialsComponent } from './event-detials.component';

describe('EventDetialsComponent', () => {
  let component: EventDetialsComponent;
  let fixture: ComponentFixture<EventDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
