import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PatientListComponent } from 'src/app/components/patient-list/patient-list.component';
import { AppointmentListComponent } from 'src/app/components/appointment-list/appointment-list.component';
import { ShowPatientDetailsComponent } from 'src/app/components/show-patient-details/show-patient-details/show-patient-details.component'
import { AddNoteComponent } from 'src/app/components/add-note/add-note.component'
 
const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: '', component: PatientListComponent },
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'patientdetail/:id', component: ShowPatientDetailsComponent },
  { path: 'addnote/:patientId', component: AddNoteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }