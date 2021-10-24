import { Component, OnInit } from '@angular/core';
// import { PostService } from '../post.service';
import { PostService } from '../post.service';
import { Posts } from '../Posts';
import { DatePipe, getLocaleDateFormat } from '@angular/common';

import {Router} from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'Posts';
error:any;
  allpost!: any;
  // EnteredDate!:new Date(yyyy: any/mm/dd);
  // EnteredDate=new Date(1994,9,9);
  EnteredDate=Date.now();

  constructor(private postservice: PostService, private router:Router) { }

  ngOnInit() {
  
   
    this.postservice.getposts().subscribe(res=>{
this.allpost=res;
    })

    

  }
  onEdit(id:any){
this.router.navigate(['/newpost',id]);


  }
  onDelete(Id:any){
this.postservice.deletepost(Id).subscribe(res=>{
  console.log(res);
  
})
  }

}