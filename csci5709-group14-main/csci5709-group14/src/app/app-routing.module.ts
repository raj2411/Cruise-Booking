import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './Authentication/route-guard';
import { CruiesDetailsComponent } from './cruies-details/cruies-details.component';
import { CruiesListComponent } from './cruies-list/cruies-list.component';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { EventComponent } from './events/event/event.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFormComponent } from './job-form/job-form.component';
import { LoginComponent } from './login/login.component';
import { OwnerLeaseComponent } from './owner-lease/owner-lease.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SignupComponent } from './signup/signup.component';
import { OwnerConfirmationComponent } from './owner-confirmation/owner-confirmation.component';
import { OwnerCancelComponent } from './owner-cancel/owner-cancel.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { FeedbackConfirmationComponent } from './feedback/feedback-confirmation/feedback-confirmation.component';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EventDetialsComponent } from './event-detials/event-detials.component';
import { RentlistComponent } from './rentlist/rentlist.component';
import { RentpaymentdetailsComponent } from './rentpaymentdetails/rentpaymentdetails.component';
import { RentdetailsComponent } from './rentdetails/rentdetails.component';
import { RentpersonalinfoComponent } from './rentpersonalinfo/rentpersonalinfo.component';
import { RentbookingconfirmedComponent } from './rentbookingconfirmed/rentbookingconfirmed.component';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'careers', component: CruiseCareersComponent },
	{ path: 'jobdetails', component: JobDetailsComponent },
	{ path: 'jobform', component: JobFormComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'event', component: EventComponent },
	{ path: 'cruiselist', component: CruiesListComponent },
	{ path: 'cruisedetails/:id', component: CruiesDetailsComponent },
	{ path: 'eventdetails', component: EventDetialsComponent },
	{ path: 'eventdetails/:id', component: EventDetialsComponent },
	{ path: 'ownerlease', component: OwnerLeaseComponent },
	{ path: 'feedback', component: FeedbackComponent },
	{ path: 'packagelist', component: PackageListComponent },
	{ path: 'packagedetails', component: PackageDetailsComponent },
	{ path: 'ownerconfirmation', component: OwnerConfirmationComponent },
	{ path: 'ownerCancel', component: OwnerCancelComponent },
	{ path: 'ownerUpdate', component: OwnerUpdateComponent },
	{ path: 'feedbacktaken', component: FeedbackConfirmationComponent },
	{ path: 'rent', component: RentlistComponent },
  { path: 'rentdetails/:id', component: RentdetailsComponent},
  { path: 'rentpersonalinfo/:id', component: RentpersonalinfoComponent},
  { path: 'rentbookingconfirmation/:id', component: RentbookingconfirmedComponent},
  {
		path: 'rentpaymentdetails/:id',
		component: RentpaymentdetailsComponent
//		canActivate: [RouteGuard],
	},
  {
		path: 'paymentdetails/:id',
		component: PaymentDetailsComponent,
		canActivate: [RouteGuard],
	},
	{
		path: 'personalinfo/:id/:type',
		component: PersonalInformationComponent,
		canActivate: [RouteGuard],
	},
	{
		path: 'bookingconfirmation/:id',
		component: BookingConfirmedComponent,
		canActivate: [RouteGuard],
	},
	{ path: 'feedback', component: FeedbackComponent },
	{ path: 'packagelist', component: PackageListComponent },
	{ path: 'packagedetails', component: PackageDetailsComponent },
	{ path: 'ownerconfirmation', component: OwnerConfirmationComponent },
	{ path: 'ownerCancel', component: OwnerCancelComponent },
	{ path: 'ownerUpdate', component: OwnerUpdateComponent },
	{ path: 'feedbacktaken', component: FeedbackConfirmationComponent },
	{
		path: 'account',
		component: UserProfileComponent,
		canActivate: [RouteGuard],
	},
];

RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled', // Add options right here
		}),
	],
	exports: [RouterModule],
	providers: [RouteGuard],
})
export class AppRoutingModule {}
