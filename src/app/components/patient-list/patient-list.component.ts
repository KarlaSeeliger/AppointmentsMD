import { Component, OnInit, OnDestroy } from '@angular/core';
import { patient } from "src/app/models/patient.model";
import {PatientService} from '../../services/patient.service';
import { Subscription} from  'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HeaderComponent } from "../header/header.component";
import { MatDialog, MatDialogRef } from '@angular/material';
import { PatientCreateComponent } from 'src/app/components/patient-create/patient-create.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {

  patients:patient[] = [];
  private patientsSub: Subscription;
  selectedPatient:patient;

 
  displayedColumns = ['Name','lastName', 'Birthdate','delete'];
  dataSource: MatTableDataSource<patient>;

  paginator: MatPaginator ;
  sort: MatSort  ;

 
  constructor(public patientsService: PatientService, public dialog: MatDialog) {

  }

 
  
  ngOnInit() {
    this.patientsService.getPatient();
    this.patientsSub = this.patientsService.getPatientUpdateListener().subscribe((patients: patient[]) => {  this.patients = patients; this.loaddata(); });
    this.loaddata();
    
  }

  loaddata(){
    this.dataSource = new MatTableDataSource(this.patients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  };

  onSelect(patient: patient) {
    this.selectedPatient = patient;
    console.log(this.selectedPatient)
  }
  openCreatePatientForm() {
    this.dialog.open(PatientCreateComponent, { width: '500px', height: '450px' });
  }

}

  






