// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderComponent } from './nav-header.component';

describe('NavHeaderComponent', () => {
	let component: NavHeaderComponent;
	let fixture: ComponentFixture<NavHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NavHeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(NavHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});