import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../Models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiURL = 'https://localhost:44388/api/colors/getall'

  constructor(private htpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel> {
    return  this.htpClient
    .get<ColorResponseModel>(this.apiURL);
  }
}
