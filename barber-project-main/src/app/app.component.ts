import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
// import { TopComponent } from './top/top.component';
// import { FrontComponent } from './front/front.component';
// import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  title = 'salonapp';
}
