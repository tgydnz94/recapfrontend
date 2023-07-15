import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../Models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiURL = 'https://localhost:44388/api/cars/cardetails'

  constructor(private htpClient:HttpClient) { }

  getCars():Observable<CarResponseModel> {
    return  this.htpClient
    .get<CarResponseModel>(this.apiURL);
  }
}
