import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewDetails(place:string){
  return  this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
  }
}
