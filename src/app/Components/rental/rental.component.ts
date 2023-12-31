import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/Models/rental';
import { RentalService } from 'src/app/Services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  
  constructor(private rentalService:RentalService ) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe((response) => {this.rentals=response.data})

  }

}
