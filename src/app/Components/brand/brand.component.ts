import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/brand';
import {HttpClient} from '@angular/common/http'
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  brands:Brand[]=[];
  
  constructor(private brandService:BrandService ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response) => {this.brands=response.data})

  }


}
