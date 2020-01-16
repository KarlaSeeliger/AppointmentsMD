import { Component } from '@angular/core';

@Component({
    selector: "app-appointment-list",
    templateUrl:"./appointment-list.component.html"
})

export class AppointmentListComponent{
    appointments=[
        {PatientName: "Karla", birthdate: ""},
        {PatientName: "Raul", birthdate: "" },
        {PatientName: "Jose", birthdate: "" }
    ];

}
