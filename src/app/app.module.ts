import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlightComponent } from './components/flight/flight.component';
import { MainComponent } from './components/main/main.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateReservationModal } from './modals/create-reservation.modal/create-reservation.modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightComponent,
    MainComponent,
    ReservationComponent,
    CreateReservationModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
