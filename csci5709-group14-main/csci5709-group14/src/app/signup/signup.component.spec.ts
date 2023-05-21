// Author: Harsh Vaghani - B00923828 - harsh.vaghani@dal.ca

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

describe('SigupComponent', () => {
	let component: SignupComponent;
	let fixture: ComponentFixture<SignupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SignupComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SignupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
