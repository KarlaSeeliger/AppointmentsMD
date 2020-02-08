import { Component, } from '@angular/core';
import {NgForm} from '@angular/forms';
import {patient} from '../../models/patient.model';
import {PatientService} from '../../services/patient.service'
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent {

  constructor(public patientsService: PatientService, public dialogRef:MatDialogRef<PatientCreateComponent>) {}

  onAddPatient(form: NgForm){
    this.patientsService.addPatient(form.value.Name, form.value.lastName, form.value.Date, form.value.phoneNum, null, null);
    this.dialogRef.close();
  }

}


