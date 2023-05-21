import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

import { JobDetailsService } from './services/job-details.service';
import { FooterComponent } from './footer/footer.component';
import { JobFormComponent } from './job-form/job-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SignupComponent } from './signup/signup.component';
import { EventContactComponent } from './events/event-contact/event-contact.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { EventSubscribeComponent } from './events/event-subscribe/event-subscribe.component';
import { EventHomeComponent } from './events/event-home/event-home.component';
import { EventComponent } from './events/event/event.component';
import { CruiesListComponent } from './cruies-list/cruies-list.component';
import { CruiesDetailsComponent } from './cruies-details/cruies-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OwnerLeaseComponent } from './owner-lease/owner-lease.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { OwnerConfirmationComponent } from './owner-confirmation/owner-confirmation.component';
import { OwnerCancelComponent } from './owner-cancel/owner-cancel.component';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Authentication/auth.interceptor';
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EventDetialsComponent } from './event-detials/event-detials.component';
import { RentbookingconfirmedComponent } from './rentbookingconfirmed/rentbookingconfirmed.component';
import { RentdetailsComponent } from './rentdetails/rentdetails.component';
import { RentlistComponent } from './rentlist/rentlist.component';
import { RentpaymentdetailsComponent } from './rentpaymentdetails/rentpaymentdetails.component';
import { RentpersonalinfoComponent } from './rentpersonalinfo/rentpersonalinfo.component';

@NgModule({
	declarations: [
		AppComponent,
		CruiseCareersComponent,
		JobDetailsComponent,
		FooterComponent,
		JobFormComponent,
		HomepageComponent,
		LoginComponent,
		NavHeaderComponent,
		SignupComponent,
		EventContactComponent,
		EventFormComponent,
		EventSubscribeComponent,
		EventHomeComponent,
		EventComponent,
		CruiesListComponent,
		CruiesDetailsComponent,
		OwnerLeaseComponent,
		PaymentDetailsComponent,
		PersonalInformationComponent,
		FeedbackComponent,
		PackageListComponent,
		PackageDetailsComponent,
		OwnerConfirmationComponent,
		OwnerCancelComponent,
		OwnerUpdateComponent,
		BookingConfirmedComponent,
		UserProfileComponent,
		EventDetialsComponent,
  RentbookingconfirmedComponent,
  RentdetailsComponent,
  RentlistComponent,
  RentpaymentdetailsComponent,
  RentpersonalinfoComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		MatAutocompleteModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		MdbCarouselModule,
		FlexLayoutModule,
		HttpClientModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		JobDetailsService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
