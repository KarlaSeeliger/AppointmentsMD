import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { patient } from '../../models/patient.model';
import { appointmentService } from '../../services/appointment.service'
import { MatDialog, MatDialogRef } from '@angular/material';


@Component({
    selector: 'appointment-create',
    templateUrl: './appointments-create.component.html',
    styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent {

    constructor(public appointmentService: appointmentService, public dialogRef: MatDialogRef<AppointmentCreateComponent>) { }

    onAddAppointment(form: NgForm) {
        console.log(form.value.date);
        this.appointmentService.addAppointment(form.value.date);
        console.log(form.value.date);
        this.dialogRef.close();
    }

}




