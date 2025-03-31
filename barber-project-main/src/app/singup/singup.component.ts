import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-singup',
  imports: [RouterLink,FormsModule,NgIf],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})

  export class SingupComponent {
    userNumber: string = ''; 
    isInvalid: boolean = false;

   
   
    validateNumber() {
      if (isNaN(Number(this.userNumber))) {
        this.isInvalid = true;  
      } else {
        this.isInvalid = false; 
      }
    }
    
  }
  

  