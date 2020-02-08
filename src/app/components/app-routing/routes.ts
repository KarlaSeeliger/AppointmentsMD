import { Routes } from '@angular/router';
import { AppointmentListComponent } from 'src/app/components/appointment-list/appointment-list.component';
import { PatientCreateComponent } from 'src/app/components/patient-create/patient-create.component';
import { PatientListComponent } from 'src/app/components/patient-list/patient-list.component';
import {AddNoteComponent} from 'src/app/components/add-note/add-note.component'
export const routes: Routes = [
    { path: 'patients', component: PatientListComponent },
    { path: 'appointments', component: AppointmentListComponent },
    { path: 'addnote/:patientId', component: AddNoteComponent} ,
    { path: '', redirectTo: 'patients' }
];