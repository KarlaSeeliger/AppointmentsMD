import {Component} from '@angular/core';
import { NgForm } from "@angular/forms";

//import { PostsService } from "../posts.service";

@Component({
    selector: 'app-appointment-create',
    templateUrl: './appointments-create.component.html',
    styleUrls: ["./appointment-create.component.css"]
})
export class AppointmentCreateComponent{
    newAppointment="";
    enteredPatient="";


    onAddappointment(patient) {
        this.newAppointment = this.enteredPatient;
        
    } 
}




