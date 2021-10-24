import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CoursesModule } from './courses/courses.module';
import { AdminModule } from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
// import {LoginComponent} from './login/login.component';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { EmployeeserviceService } from './auth/employeeservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // LoginComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [

  
BrowserModule,
CommonModule,

  HttpClientModule,
  CoursesModule,
  StaticpagesModule,
  AdminModule,
  AuthModule,
  AppRoutingModule
   
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

