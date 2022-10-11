import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-airlines',
  templateUrl: './view-airlines.component.html',
  styleUrls: ['./view-airlines.component.css']
})
export class ViewAirlinesComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()
   }

  fetchData =() =>{
    this.myapi.ViewAirlineData().subscribe(
      (data) =>{
        this.airlineData = data
      }
    )
  }

  airlineData:any = []



  ngOnInit(): void {
  }

}

