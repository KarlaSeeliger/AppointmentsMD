import { Component, OnInit, OnDestroy } from '@angular/core';

import { appointment } from 'src/app/models/appointment.model';
import { patient } from "src/app/models/patient.model";
import { appointmentService } from '../../services/appointment.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HeaderComponent } from "../header/header.component";
import { MatDialog, MatDialogRef } from '@angular/material';
import { PatientCreateComponent } from 'src/app/components/patient-create/patient-create.component';
import { AppointmentCreateComponent } from '../appointments-create/appointments-create.component';


@Component({
    selector: "app-appointment-list",
    templateUrl:"./appointment-list.component.html"
})

export class AppointmentListComponent implements OnInit{
    appointments: appointment[];
    private appointmentSub: Subscription;
    selectedAppointment: appointment;


    constructor(public appointmentService: appointmentService, public dialog: MatDialog) {

    }

    ngOnInit() {
       this.appointmentService.getAppointments();
        this.appointmentSub = this.appointmentService.getAppointmentUpdateListener().subscribe((appointment: appointment[]) => { this.appointments = appointment });
        console.log(this.appointments);

    }

    openCreateAppointmentForm() {
        this.dialog.open(AppointmentCreateComponent, { width: '500px', height: '450px' });
    }
    

}
