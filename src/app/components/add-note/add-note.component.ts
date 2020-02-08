import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { note } from '../../models/note.model';
import { PatientService } from '../../services/patient.service'
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { patient } from 'src/app/models/patient.model';
import { Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  patientId;
  public patient:patient;
  constructor(public patientsService: PatientService, public route: ActivatedRoute, public dialog: MatDialog, public router:Router,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("patientId")) {
        this.patientId = paramMap.get("patientId");
        this.patient=this.patientsService.getSelectedPatient(this.patientId);
        console.log("paciente de formular"+this.patientId)
        
        }});
  }
  onAddNote(PatientId:string, form: NgForm) {
    this.patientsService.updatePatientNotes(PatientId, form.value.text);
    this.location.back()
  }

  goBack(): void {
    this.location.back();
  }
}
