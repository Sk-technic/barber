import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-booking',
  imports: [NgIf,RouterLink,HeaderComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  showImage = false;

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
