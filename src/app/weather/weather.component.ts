import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  place:string=''
  weather:string=''
  location:string=''
  temparature:string=''
  icon:string=''

  constructor(private router:Router, private api:ApiService, private activateroute:ActivatedRoute){
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }

  ngOnInit(): void {
    

    }
    search(event:any){
      this.location=event.target.value;
      this.viewDetails();

    }

    viewDetails(){
      this.api.viewDetails(this.location).subscribe((data:any)=>{
        this.weather = data.weather[0].main;
        this.icon = data.weather[0].icon;
        this.temparature = (data.main.temp - 273.15).toFixed(2) + '°C';
        this.place=data.name;
      });
    }
    
  }


