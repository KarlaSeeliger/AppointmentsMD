import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentCreateComponent } from './Appointments/appointments-create/appointments-create.component';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppointmentListComponent } from './Appointments/appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentCreateComponent,
    HeaderComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
