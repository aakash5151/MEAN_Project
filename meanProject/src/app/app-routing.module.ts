import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

const routes: Routes = [
  { path: 'SignUp', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ForgetPassword', component: ForgetPasswordComponent },

  {
    path: 'Home', component: HomeComponent,
    children: [
      {
        path: 'Booking'
        , component: BookingComponent
      },
      { path: '', component: CoverPageComponent },
      { path: 'BookingDetails', component: BookingDetailsComponent },
    ]
  },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: '', redirectTo: '/SignUp', pathMatch: 'full' },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
