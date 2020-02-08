import { appointment } from './appointment.model';
import {note} from './note.model';

export class patient { 
    id: string;
    Name: String;
    lastName: String;
    Birthdate: Date;
    phoneNum: String;
    appointments: appointment[];
    notes : note[];
    static id: string;
}

