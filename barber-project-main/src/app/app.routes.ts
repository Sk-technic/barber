import { Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';
import { GetstartComponent } from './getstart/getstart.component';
import { AccountComponent } from './account/account.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
   {path:'',component:HomeComponent},
    {path:'singup',component:SingupComponent},
    {path:'getstart',component:GetstartComponent},
    {path:'account',component:AccountComponent},
    {path:'booking',component:BookingComponent},
    {path:'header',component:HeaderComponent}
   
];
