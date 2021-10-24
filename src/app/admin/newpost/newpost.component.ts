
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { PostService } from '../post.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../Posts';@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
datasave:boolean=false;
msg:string='';
newform!:FormGroup;
postid!:number;
// iseditable:boolean=false; b
  constructor(private router:Router,private postservice:PostService, private fb:FormBuilder, private activatedroute:ActivatedRoute) {
this.activatedroute.params.subscribe(p=>{
this.postid=p.id;

  // this.iseditable=true;

  this.postservice.getwithid(this.postid).subscribe(res=>{
    
      this.newform.patchValue({
        Title:res.Title,
        // Image:res.Image,
       Full_Desc:res.Full_Desc,
       Sort_Desc:res.Sort_Desc,
       Author:res.Author,
       EnteredDate:res.EnteredDate
      })
    
  })

})


   }

  ngOnInit(): void {

    this.newform=this.fb.group({
      Title:['', [Validators.required, Validators.maxLength(20)]],
      //  Image:[''],
      Full_Desc:['',[Validators.required]],
      Sort_Desc:['',[Validators.required]],
      Author:['',[Validators.required]],
      EnteredDate:['',[Validators.required]]
    })
  }

  onSubmit(){
    let posts= this.newform.value;
   this.addpost(posts);
   this.newform.reset();
   this.datasave=false;
  }

  addpost(posts:Posts){
if(this.postid==null){

this.postservice.createPost(posts).subscribe(res=>{
  this.datasave=true;
  this.msg='post added';
console.log(res);
this.postid==null;
})
}


else{
posts.id=this.postid;
  this.postservice.updatepost(this.postid,posts).subscribe(res=>{
    this.datasave=true;
    this.msg='post edited';
    console.log(res);
    this.router.navigate(['/post']);
  })


}
  }

}
