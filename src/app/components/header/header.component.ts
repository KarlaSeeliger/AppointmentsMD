import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PatientCreateComponent } from 'src/app/components/patient-create/patient-create.component';

@Component({
selector: "app-header",
templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    openCreatePatientForm() {
        this.dialog.open(PatientCreateComponent, { width: '500px', height: '450px' });
    }

}



