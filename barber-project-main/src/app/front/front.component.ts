import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-front',
  imports: [NgFor],
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {
  constructor(private service:DataService){
    this.shop=this.service.shop
    this.shopinfo=this.service.shopinfo
     }
   
   shop:{ 
     imag:string,  
     name:string,
     rating:number,
     }[]=[]
   
   shopinfo:{
     img:string,
       cabine:string,
       facilitys:string,
   }[]=[] 
   }

