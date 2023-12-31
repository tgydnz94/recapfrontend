import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Models/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  
  constructor(private colorService:ColorService ) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe((response) => {this.colors=response.data})

  }


}
