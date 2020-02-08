import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentCreateComponent } from './components/appointments-create/appointments-create.component';
import { MatButtonModule,
    MatPaginator, MatSort,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';


import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowPatientDetailsComponent } from './components/show-patient-details/show-patient-details/show-patient-details.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    HeaderComponent,
    AppointmentListComponent,
    PatientCreateComponent,
    PatientListComponent,
    ShowPatientDetailsComponent,
    AddNoteComponent
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatNativeDateModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })

  ],
  entryComponents: [
    PatientCreateComponent,
    AddNoteComponent,
    AppointmentCreateComponent
    
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
