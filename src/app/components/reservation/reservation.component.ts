import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  public identification;
  public listReservation = [];

  constructor(
    private airlineService: AirlineService
  ) { }

  ngOnInit() { }


  public search() {

    this.airlineService.checkReservation(this.identification).subscribe((response: any) => {
      this.listReservation = response.data;

    })
  }
}
