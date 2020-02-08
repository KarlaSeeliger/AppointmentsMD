import { patient } from '../models/patient.model';
import { note } from '../models/note.model';
import { appointment } from '../models/appointment.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderComponent } from "../components/header/header.component";
import { Time } from '@angular/common';



@Injectable({ providedIn: 'root' })
export class appointmentService {
    private appointments: appointment[];
    private appointmentsUpdated = new Subject<appointment[]>();
  
    
    asortedappointments;

    constructor(private http: HttpClient) { }

    getAppointments() {
        this.http.get<{ message: String, appointments: any }>('http://localhost:3000/api/appointments')
            .pipe(map((patientData) => {
                return patientData.appointments.map(appointment => {
                    return {
                        id: appointment._id,
                        date: appointment.date,
                    };
                });
            })).subscribe(transformedappointments => {
                this.appointments = transformedappointments.sort((a, b) => b.date - a.date);
                this.appointmentsUpdated.next([...this.appointments]);
            });

    }


    getAppointmentUpdateListener() {
        return this.appointmentsUpdated.asObservable();
    }

    addAppointment(date: Date) {
        const appointment: appointment = {
            id: "",
            date: date,
            patient: undefined,
        }
        this.http.post<{ message: String; appointmentId: string }>('http://localhost:3000/api/appointments',
            appointment).subscribe((responseData) => {
                console.log(responseData);
                const id = responseData.appointmentId;
                appointment.id = id;
                this.appointments.push(appointment);
                this.appointmentsUpdated.next([...this.appointments]);
                console.log(appointment);

            });

    }

    getSelectedAppointment(id: string): appointment {
        return this.appointments.filter((appointment) => (appointment.id === id))[0];

    }
}