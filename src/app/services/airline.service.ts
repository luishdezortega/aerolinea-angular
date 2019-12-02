import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AirlineService {


  constructor(
    private http: HttpClient
  ) { }



  public  getFligths(): Observable<any> {
   return this.http.get(environment.url.concat('vuelos'));
  }

  public createReservation( user: UserInterface, idVuelo: string ) {
    const headers = new HttpHeaders().set('idVuelo', idVuelo);

    return this.http.post(environment.url.concat('reserva/create'), user, { headers } );
  }

  public checkReservation(identification: string ) {
    const params = new HttpParams().set('identification',identification)
    return this.http.get(environment.url.concat('reserva'), { params } );
  }



}
