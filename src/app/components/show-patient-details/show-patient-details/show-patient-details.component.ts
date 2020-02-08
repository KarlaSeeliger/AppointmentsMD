import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material';
import {AddNoteComponent} from 'src/app/components/add-note/add-note.component'
import { patient } from "src/app/models/patient.model";
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-show-patient-details',
  templateUrl: './show-patient-details.component.html',
  styleUrls: ['./show-patient-details.component.css']
})
export class ShowPatientDetailsComponent implements OnInit {
  @Input()
  patient: patient;
  id ="5e34ca278ef0d906bd049031";
  constructor(private patientservice: PatientService,
    private route: ActivatedRoute,
    private location: Location, public dialog: MatDialog) { }

  ngOnInit(){
     const id = this.route.snapshot.params['id'];
     console.log(id);
    this.patient = this.patientservice.getSelectedPatient(id);
    console.log(this.patient)
    
  }

  openAddNoteForm() {
    this.dialog.open(AddNoteComponent, { width: '500px', height: '450px' });
  }

  

  goBack(): void {
    this.location.back();
  }
}








