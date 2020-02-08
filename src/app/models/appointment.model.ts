import { Time } from '@angular/common';
import { patient } from './patient.model';

export interface appointment {
    id: string;
    date:Date;
    patient: patient[];
    
}
