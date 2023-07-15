import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../Models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiURL='https://localhost:44388/api/customers/getall'

  constructor(private htpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel> {
    return  this.htpClient
    .get<CustomerResponseModel>(this.apiURL);
  }
}
