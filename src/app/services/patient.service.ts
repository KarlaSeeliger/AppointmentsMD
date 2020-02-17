import {patient} from '../models/patient.model';
import {note} from '../models/note.model';
import {appointment } from '../models/appointment.model';

import {HttpClient, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderComponent } from "../components/header/header.component";


@Injectable({providedIn:'root'})
export class PatientService{
    private patients: patient[];
    private patientUpdated= new Subject<patient[]>();
    private notes: note[];
    private noteUpdated = new Subject<note[]>();
    public patientSelected;
    public updatedPatient;
 
    constructor(private http:HttpClient){}

    getPatient(){
        this.http.get<{message: String, patients: any}>('http://localhost:3000/api/patients')
            .pipe(map((patientData) => {
                return patientData.patients.map(patient => {
                    return {
                        Name: patient.Name,
                        lastName: patient.lastName,
                        Birthdate: patient.Birthdate,
                        id: patient._id,
                        notes:patient.Notes
                    };
                });
            })).subscribe(transformedPatients => {
                this.patients = transformedPatients;
                this.patientUpdated.next([...this.patients]);
            });
           
    }
  

    getPatientUpdateListener(){
        return this.patientUpdated.asObservable();
    }

    addPatient(Name: string, lastName: string, Birthdate: any, PhoneNum: any,
        appointments: appointment[], notes: note[] ){
        const patient:patient = { id: "",
                                Name: Name,
                                lastName: lastName,
                                Birthdate: Birthdate,
                                phoneNum:PhoneNum,
                                appointments: undefined,
                                notes: undefined}
        this.http.post<{ message: String; patientId: string }>('http://localhost:3000/api/patients', 
        patient).subscribe((responseData) => {
        console.log(responseData);
            const id = responseData.patientId;
            patient.id = id;
        this.patients.push(patient);
        this.patientUpdated.next([...this.patients]);
        
        ;});
            
    }
    
    getSelectedPatient(id: string): patient {
        return  this.patients.filter((patient) => (patient.id === id))[0];
    }
    

    
    updatePatientNotes(patientId: string, textS: string, textO: string, textA: string, textP: string, BPd: number, BPs: number, HR: number, Br: number, Temp: number, dx:string ) {
        const note: note = { id: "", date: null, textS: textS, textO: textO, textA: textA, textP: textP, BPd: BPd, BPs: BPs, HR: HR, Temp: Temp, RR:Br,dx:dx };
        console.log(note);
        console.log(patientId);
        this.http.post<{ message: String; noteId: string; notedate: Date}>('http://localhost:3000/api/patients/addnote/'+patientId,note).subscribe((responseData) => {
            const index = this.patients.findIndex(p => p.id === patient.id);
            const updatedPatients = [...this.patients];
            const oldPostIndex = updatedPatients.findIndex(p => p.id === patientId);
            const patientupdate = updatedPatients[oldPostIndex];
            console.log("paciente actualizado" + patientupdate);
            const id = responseData.noteId;
            const date = responseData.notedate;
            note.id=id;
            note.date=date;
            patientupdate.notes.push(note);
            updatedPatients[oldPostIndex] = patientupdate;
            this.patients = updatedPatients;
            this.patientUpdated.next([...this.patients]);
            
            console.log(this.patients);
            console.log(this.updatedPatient);
        console.log("angular send")
  
   
    })}

    }

    
