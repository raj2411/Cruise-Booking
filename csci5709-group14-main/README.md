

# Project Proposal

* *Date Created*: 26 2 2023
* *Last Modification Date*: 26 2 2023
* *Gitlab Frontend URL*: https://git.cs.dal.ca/hvaghani/csci5709-group14.git
* *Gitlab Backend URL*: https://git.cs.dal.ca/akashg/web-backend.git
* *Project Frontend Url (render)*: https://hfxcruise-web-group14.onrender.com/ 
* *Project Backend Url (render)*: https://hfxcruise-group14-backend.onrender.com/api/

## Authors

* [Akash Gupta] - *(ak459448@dal.ca)*
* [Karan Aggarwal] - *(kr284229@dal.ca)*
* [Harsh Arvindkumar Vaghani] - *(harsh.vaghani@dal.ca)*
* [Krina Rajeshkumar Mistry] - *(kr981143@dal.ca)*
* [Raj Nileshkumar Patel] - *(Rj506049@dal.ca)*

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node.js
Angular CLI
Bootstrap
Angular Material
```

### Installing

Here are the series of steps required to get a development env running,

**Step 1.)** Download NodeJs from the official website [Node.js](https://nodejs.org/en/). Install the NodeJs and NPM using the windows installer.

To check the current version and make sure that node is installed run this command in command prompt 
```
node -v
```
This project was generated with Angular CLI version 15.1.3.

**Step 2.)** Once the node is installed, download Angular CLI using this command
```
npm install -g @angular/cli
```

**Step 3.)** Now, to setup the project environment run this command
```
ng new <project_name>
```
Replace  <project_name> with your project name.  It will also ask you for some additional info which you can choose according to your preferences or you can just press [return] or [enter] to select default settings.


**Step 4.)** Run the project using following command,
```bash
ng serve --open
```
The --open will autometically opens the web project in your browser to http://localhost:4200


### Deployment

Netlify is used for deployment of this Project.

**Step 1.)** First, develop your project as per your requirement. 

**Step 2.)** Once you are done with the changes and your project is ready for deploymet you have to make the deployment build using this command, run this command in your project directory,
```bash
ng build
```
This commad will create directory named ***dist/<project_name>*** your project directory.

**Step 3.)** Login to the Netlify account and Navigate to the ***deploy*** option

**Step 4.)** Now, you need to upload this folder to *Netlify*, for that, drag and drop the ***dist/<project_name>*** folder from the angular project

**Step 5.)** Once it is uploaded, you will get the URL of your hosted project on Netlify. With these steps, project should be deployed successfully !!!


## Built With

* [Angular] https://angular.io/guide/setup-local - Angular Framework
* [Netlify] https://www.netlify.com/ - Netlify Deployment
* [Visual Studio Code] https://code.visualstudio.com/ - IDE

## Sources Used

### event-home.component.html

*Lines 3 - 26*

```html
		<div class="background-img">
			<mdb-carousel [controls]="true" [dark]="true">
				<mdb-carousel-item>
					<img
						src="../../assets/images/bg.jpg"
						class="d-block w-100"
						alt="Picture 1"
					/>
				</mdb-carousel-item>
				<mdb-carousel-item>
					<img
						src="../../assets/images/bg1.jpg"
						class="d-block w-100"
						alt="Picture 2"
					/> </mdb-carousel-item
				><mdb-carousel-item>
					<img
						src="../../assets/images/bg2.jpg"
						class="d-block w-100"
						alt="Picture 3"
					/>
				</mdb-carousel-item>
			</mdb-carousel>
		</div>

```

The code above was created by adapting the code in Bootstrap 5 Carousel component (https://mdbootstrap.com/docs/angular/components/carousel/) as shown below: 

```html
<mdb-carousel [controls]="true">
  <mdb-carousel-item>
    <img
      src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
      class="d-block w-100"
      alt="..."
    />
  </mdb-carousel-item>
  <mdb-carousel-item>
    <img
      src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
      class="d-block w-100"
      alt="..."
    />
  </mdb-carousel-item>
  <mdb-carousel-item>
    <img
      src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
      class="d-block w-100"
      alt="..."
    />
  </mdb-carousel-item>
</mdb-carousel>
```
- The code in [event-form.component.html] was referred from (https://mdbootstrap.com/docs/angular/components/carousel/)
- To create a carousel on the event page to show different images
- I created new <div> in the event-home page and then used three different images to make the carousel and then added the text on the carousel with HTML and CSS


### event-form.component.html

*Lines 3 - 26*

```html
	<div class="form-stepper">
		<mat-vertical-stepper [linear]="false" #stepper>
			<mat-step [stepControl]="personaldetails">
				<form [formGroup]="personaldetails">
					<ng-template matStepLabel
						>Your Personal Details</ng-template
					>
					<div class="form-fields">
						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="First name"
									formControlName="first_name"
									required
								/>
							</div>
						</mat-form-field>

						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Last name"
									formControlName="second_name"
									required
								/>
							</div>
						</mat-form-field>
					</div>
					<div>
						<button mat-button matStepperNext class="form-buttons">
							Next
						</button>
					</div>
				</form>
			</mat-step>
			<mat-step [stepControl]="contactdetails">
				<form [formGroup]="contactdetails">
					<ng-template matStepLabel>Contact details</ng-template>
					<div class="form-fields">
						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Email ID"
									formControlName="email"
									required
								/>
							</div>
						</mat-form-field>

						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Phone Number"
									formControlName="contact"
									required
								/>
							</div>
						</mat-form-field>
					</div>
					<div>
						<button
							mat-button
							matStepperPrevious
							class="form-buttons"
						>
							Back
						</button>
						<button mat-button matStepperNext class="form-buttons">
							Next
						</button>
					</div>
				</form>
			</mat-step>
			<mat-step [stepControl]="bookingdetails">
				<form [formGroup]="bookingdetails">
					<ng-template matStepLabel>Booking Details</ng-template>
					<div class="form-fields">
						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Departure City"
									formControlName="city"
									required
								/>
							</div>
						</mat-form-field>
						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Date"
									formControlName="date"
									required
								/>
							</div>
						</mat-form-field>
					</div>
					<div>
						<button
							mat-button
							matStepperPrevious
							class="form-buttons"
						>
							Back
						</button>
						<button mat-button matStepperNext class="form-buttons">
							Next
						</button>
					</div>
				</form>
			</mat-step>
			<mat-step [stepControl]="eventdetails">
				<form [formGroup]="eventdetails">
					<ng-template matStepLabel>Event Details</ng-template>
					<div class="form-fields">
						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Event Name"
									formControlName="event"
									required
								/>
							</div>
						</mat-form-field>

						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Total guests"
									formControlName="guests"
									required
								/>
							</div>
						</mat-form-field>
					</div>
					<div>
						<button
							mat-button
							matStepperPrevious
							class="form-buttons"
						>
							Back
						</button>
						<button mat-button matStepperNext class="form-buttons">
							Next
						</button>
					</div>
				</form>
			</mat-step>

			<mat-step [stepControl]="additionaldetails">
				<form [formGroup]="additionaldetails">
					<ng-template matStepLabel>Additional Details</ng-template>
					<div class="form-fields">
						<mat-form-field>
							<div>
								<input
									matInput
									placeholder="Additional Information"
									formControlName="extra"
									required
								/>
							</div>
						</mat-form-field>
					</div>
					<div>
						<button
							mat-button
							matStepperPrevious
							class="form-buttons"
						>
							Back
						</button>
						<button mat-button matStepperNext class="submit-button">
							Submit
						</button>
					</div>
				</form>
			</mat-step>
			<mat-step>
				<ng-template matStepLabel>Complete</ng-template>
				<h2>Thank you for providing details.</h2>
				<div>
					<button
						mat-button
						(click)="stepper.reset()"
						class="form-buttons"
					>
						Reset
					</button>
				</div>
			</mat-step>
		</mat-vertical-stepper>
	</div>
```

The code above was created by adapting the code in Vertical variants of the Stepper component of the Angular Material Components (https://material.angular.io/components/stepper/overview) as shown below: 

```html
<mat-stepper orientation="vertical" [linear]="isLinear" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field appearance="fill">
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field appearance="fill">
        <mat-label>Address</mat-label>
        <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
               required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
```

- The code in [event-form.component.html] was referred from (https://material.angular.io/components/stepper/overview)
- To create a form on the event page to sumbmit the request to organize an event
- I used the vertical stpper to create a from with six steps. I also used angular material components with this stepper to build the form fields.


### cruise-careers.component.html

*Lines 4 - 59*

```html
<form class="example-form" (ngSubmit)="onSubmit()">
		<mat-form-field class="example-full-width-1" appearance="fill">
			<img src="../../assets/images/location.png" alt="" />
			<input
				type="text"
				name="jobs"
				[(ngModel)]="job"
				placeholder="Job Title"
				matInput
				[formControl]="jobControl"
				[matAutocomplete]="auto"
			/>
			<mat-autocomplete #auto="matAutocomplete">
				<mat-option
					*ngFor="let jobOption of filteredJob | async"
					[value]="jobOption"
				>
					{{ jobOption }}
				</mat-option>
			</mat-autocomplete>
		</mat-form-field>
		<mat-form-field class="example-full-width-2" appearance="fill">
			<img src="../../assets/images/search.png" alt="" />
			<input
				type="text"
				name="locations"
				[(ngModel)]="location"
				placeholder="Job Location"
				matInput
				[formControl]="locationControl"
				[matAutocomplete]="autoLocation"
			/>
			<mat-autocomplete #autoLocation="matAutocomplete">
				<mat-option
					*ngFor="let locationOption of filteredLocation | async"
					[value]="locationOption"
				>
					{{ locationOption }}
				</mat-option>
			</mat-autocomplete>
		</mat-form-field>
		<button
			class="btn btn-primary"
			p-100
			type="submit"
			style="
				font-size: 193%;
				margin-top: 1%;
				margin-left: 3%;
				padding: 2%;
				width: 17%;
			"
		>
			Search
		</button>
	</form>

```

The code above was created by adapting the code in Angular Material page (https://material.angular.io/components/autocomplete/overview) as shown below: 

```html
<form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Number</mat-label>
    <input type="text"
           placeholder="Pick one"
           aria-label="Number"
           matInput
           [formControl]="myControl"
           [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
```

- The code in [cruise-careers.component.html] was referred from (https://material.angular.io/components/autocomplete/overview)
- To create a auto-complete based filter
- I stored the list of companies and the location in cruise-careers.component.ts file and then created two form controls one for job and another one for location by looping it into a for loop.



### cruise-careers.component.html

*Lines  70 *

```html
 <div class="jumbotron">

```

The code above was created by adapting the code in [Bootstrap] https://getbootstrap.com/docs/4.0/components/jumbotron/ as shown below: 

```html
 <div class="jumbotron">

```

- <!---How---> The code was referred from bootsrap page
- <!---Why---> To create a box to show message regarding job opening
- <!---How---> Used the class name "jumbotron"



### cruise-careers.component.ts

*Lines 27 - 53*

```javascript
    this.totalFoundJob = Object.keys(this.jobDetails).length;
		this.filteredJob = this.jobControl.valueChanges.pipe(
			startWith(''),
			map((value) => this._filterJob(value || ''))
		);
		console.log(this.filteredJob);
		this.filteredLocation = this.locationControl.valueChanges.pipe(
			startWith(''),
			map((value) => this._filterLocation(value || ''))
		);
		console.log(this.filteredLocation);
	}

	private _filterJob(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.filteredJobOptions.filter((filteredJobOptions) =>
			filteredJobOptions.toLowerCase().includes(filterValue)
		);
	}
	private _filterLocation(value: string): string[] {
		const filterValue = value.toLowerCase();

		return this.filteredLocationOptions.filter((filteredLocationOptions) =>
			filteredLocationOptions.toLowerCase().includes(filterValue)
		);
	}

```

The code above was created by adapting the code in Angular Material page (https://material.angular.io/components/autocomplete/overview) as shown below:

```javascript
myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
```

- <!---How---> The code is referred from angular material page https://material.angular.io/components/autocomplete/overview 
- <!---Why---> To filter the job and location when user provides the input in auto-complete input filed
- <!---How---> Code was modified by using _.filter function on job and location String arrays.

### homepage.component.html

*Lines 5 - 15/ 59-69*

```html
<mat-form-field appearance="fill" style="width: 188%">
    <mat-label>Source</mat-label>
    <mat-select>
      <mat-option
        *ngFor="let source of sources"
        [value]="source"
      >
        {{ source }}
      </mat-option>
    </mat-select>
</mat-form-field>

<mat-form-field appearance="fill" style="width: 188%">
  <mat-label>Destination</mat-label>
  <mat-select>
    <mat-option
      *ngFor="let destination of destinations"
      [value]="destination"
    >
      {{ destination }}
    </mat-option>
  </mat-select>
</mat-form-field>

```

The code above was created by adapting the code in Angular Material page (https://material.angular.io/components/select/overview) as shown below:

```html
<mat-form-field appearance="fill">
  <mat-label>Favorite food</mat-label>
  <mat-select>
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{food.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>

```

- <!---How---> The code is referred from angular material page https://material.angular.io/components/select/overview  
- <!---Why---> To display the list of source and destination to the user
- <!---How---> Store the array of source and destination in .ts file of same component and with help *ngFor display the list to the user

### homepage.component.html

*Lines 19-47*


```html
<mat-form-field
					appearance="fill"
					class="example-form-field"
					style="width: 117%"
				>
					<mat-label>Enter a date range</mat-label>
					<mat-date-range-input [rangePicker]="rangePicker">
						<input matStartDate placeholder="Start date" />
						<input matEndDate placeholder="End date" />
					</mat-date-range-input>
					<mat-datepicker-toggle
						matIconSuffix
						[for]="rangePicker"
					></mat-datepicker-toggle>
					<mat-date-range-picker #rangePicker>
						<mat-date-range-picker-actions>
							<button mat-button matDateRangePickerCancel>
								Cancel
							</button>
							<button
								mat-raised-button
								color="primary"
								matDateRangePickerApply
							>
								Apply
							</button>
						</mat-date-range-picker-actions>
					</mat-date-range-picker>
</mat-form-field>

```

The code above was created by adapting the code in Angular Material page (https://material.angular.io/components/datepicker/overview)



```

## References and Inspiration

1) https://www.netlify.com/
2) https://www.educative.io/answers/how-to-create-columns-in-html
3) https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_default&stacked=h 
4) https://angular.io/
5) https://material.angular.io/
6) https://mdbootstrap.com/snippets/standard/mdbootstrap/2885096?view=side
7) https://material.angular.io/components/autocomplete/overview 
8) https://getbootstrap.com/docs/4.0/components/jumbotron/
9) https://material.angular.io/components/autocomplete/overview
10) https://getbootstrap.com/docs/4.0/components/navbar/
11) https://angular.io/guide/reactive-forms 
12) https://angular.io/guide
13) https://www.youtube.com/watch?v=Wy5fJocms_M&t=1218s
14) https://stackoverflow.com/

Images under assets folder sources

1) bg: https://unsplash.com/photos/tthKs4A7XMY
2) bg1: https://www.weforum.org/agenda/2018/03/8-steps-to-solve-the-oceans-plastic-problem/
3) bg2: https://www.infinity-transportation.com/leisure/cruiseport/port-everglades/princess-cruise-line/royal-princess/
4) bg3: https://unsplash.com/photos/LWFdBz4d6nE
5) Disney_Cruises:https://www.pngegg.com/en/png-wodmg
6) P&O : https://freebiesupply.com/logos/po-cruises-logo/
7) virgin_voyages : https://www.virgin.com/virgin-companies/virgin-voyages
8) RCL_BIG : https://companieslogo.com/royal-caribbean/logo/
9) Cruise_Home,Norwegian_Cruise,RCC_Cruise,Virgin_Cruise: https://openverse.org/?referrer=creativecommons.org 
10) search,location: https://fonts.google.com/
11) No-Data: https://storyset.com/illustration/no-data/rafiki
12) newyork : https://www.pexels.com/photo/photo-of-statue-of-liberty-2767739/
13) login-cruise-img: https://www.shutterstock.com/image-photo/puerto-vallarta-jalisco-mexico-270319-princess-1700026555
14) login-cruise-img-2:  https://unsplash.com/photos/Q2B08QyXKC4
15) jack : https://www.ship-technology.com/news/msc-net-zero-ghg-emissions/
16) hotel_room : https://www.portobay.com/en/hotels/madeira-hotels/porto-santa-maria/gallery/

Other images sources 

https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvaXMxNDcwOS1pbWFnZS1rd3Z3dDFrcS5qcGc.jpg

https://svgsilh.com/png/1300155-3f51b5.png 

https://upload.wikimedia.org/wikipedia/commons/2/23/Flag-map_of_South_Africa.svg

https://coimages.sciencemuseumgroup.org.uk/images/15/44/pic_1978_928.jpg 

https://upload.wikimedia.org/wikipedia/commons/4/49/Flag-map_of_Central_America.svg

https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJjcnVpc2Vfc2hpcF9teV9zaGlwLWltYWdlLWt5YmR4NXQ5LmpwZw.jpg 

https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2xyL2RpZ2l0YWxjd2NvbW1vbndlYWx0aHB6NTBoMDkxNS1pbWFnZS5qcGc.jpg 

https://images.rawpixel.com/image_1300/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZsNDc5NzM5NjkwMDYtaW1hZ2Uta3ljaXZxejUuanBn.jpg 

Valuable Mention: 

Maximilian Schwarzmuller: YouTube Tutorial and Lectues of Maximilian helped a lot to learn the angular and related topics.
```

