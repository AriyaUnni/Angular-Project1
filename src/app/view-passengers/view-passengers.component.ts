import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-passengers',
  templateUrl: './view-passengers.component.html',
  styleUrls: ['./view-passengers.component.css']
})
export class ViewPassengersComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()
   }

  fetchData=() =>{
    this.myapi.ViewPassengerData().subscribe(
      (data) =>{
        this.passengerData=data
      }
    )
  }

  passengerData:any = {}

  ngOnInit(): void {
  }

}
