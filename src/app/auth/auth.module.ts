import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ], exports:[]
})
export class AuthModule { }
