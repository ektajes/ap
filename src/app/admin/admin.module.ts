import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';
import { NewpostComponent } from './newpost/newpost.component';
import { AuthGuard } from '../auth.guard';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    NewpostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers:[PostService, AuthGuard]
})
export class AdminModule { }
