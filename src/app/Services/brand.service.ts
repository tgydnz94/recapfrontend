import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandResponseModel } from '../Models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiURL='https://localhost:44388/api/brands/getall'

  constructor(private htpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel> {
    return  this.htpClient
    .get<BrandResponseModel>(this.apiURL);
  }
}
