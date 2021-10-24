import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import {NewpostComponent} from './newpost/newpost.component';
// import {AuthGuard} from 'auth.guard.ts';
import { AuthGuard } from '../auth.guard';
// import {Auth}
const routes: Routes = [
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]} ,
  {path:'post',component:PostsComponent} ,
  {path:'newpost', component:NewpostComponent},
  {path:'newpost/:id', component:NewpostComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
// eximport { AuthGuard } from './../auth.guard';

})
export class AdminRoutingModule { }
