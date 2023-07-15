import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalResponseModel } from '../Models/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiURL = 'https://localhost:44388/api/rentals/rentaldetails'

  constructor(private htpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel> {
    return  this.htpClient
    .get<RentalResponseModel>(this.apiURL);
  }
}
