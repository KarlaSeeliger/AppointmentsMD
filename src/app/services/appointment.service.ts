import { patient } from '../models/patient.model';
import { note } from '../models/note.model';
import { appointment } from '../models/appointment.model';
import { PatientService } from '.././services/patient.service';

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
    private patients: patient[];
    
    asortedappointments;

    constructor(private http: HttpClient, patientservice: PatientService) { }

    getAppointments() {
        this.http.get<{ message: String, appointments: any }>('http://localhost:3000/api/appointments')
            .pipe(map((patientData) => {
                return patientData.appointments.map(appointment => {
                    return {
                        id: appointment._id,
                        date: appointment.date,
                        patient: appointment.patient
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
    
    

    addAppointmentnew(date: Date, Name: string, lastName: string, Birthdate: any, PhoneNum: any) {
        const appointment: appointment = {
            id: "",
            date: date,
            patient: [{
                id: "",
                Name: Name,
                lastName: lastName,
                Birthdate: Birthdate,
                phoneNum: PhoneNum,
                appointments: undefined,
                notes: undefined
            }],
        }
        this.http.post<{ message: String; appointmentId: string; patientId:string }>('http://localhost:3000/api/appointments/newpatient',
            appointment).subscribe((responseData) => {
                console.log(responseData);
                const id = responseData.appointmentId;
                appointment.id = id;
                appointment.patient[0].id = responseData.patientId;
                this.appointments.push(appointment);
                this.appointmentsUpdated.next([...this.appointments]);
                console.log(appointment);

            });

    }
    addAppointmentToPatient(date: Date, Name: string, lastName: string, Birthdate: any, PhoneNum: any) {
        const appointment: appointment = {
            id: "",
            date: date,
            patient: [{
                id: "",
                Name: Name,
                lastName: lastName,
                Birthdate: Birthdate,
                phoneNum: PhoneNum,
                appointments: undefined,
                notes: undefined
            }],
        }
        this.http.post<{ message: String }>('http://localhost:3000/api/appointments/add',
            appointment).subscribe((responseData) => {
                console.log(responseData);
                //const id = responseData.appointmentId;
                //appointment.id = id;
                //appointment.patient[0].id = responseData.patientId;
                this.appointments.push(appointment);
                this.appointmentsUpdated.next([...this.appointments]);
                console.log(appointment);

            });

    }
    getSelectedAppointment(id: string): appointment {
        return this.appointments.filter((appointment) => (appointment.id === id))[0];

    }
}