import { Injectable } from '@angular/core';
 import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from './Posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  

   url="http://localhost:3000/post";

   getposts():Observable<Posts>{
     return this.http.get<Posts>(this.url);
   }
   getwithid(id:number):Observable<Posts>{
     return this.http.get<Posts>(this.url+"/"+id);
   }

   updatepost(id:number, post:Posts):Observable<Posts>{
    return this.http.put<Posts>(this.url+"/"+id, post);
  }
deletepost(id:number):Observable<Posts>{
  return this.http.delete<Posts>(this.url+"/"+id);
}
   createPost(posts:Posts):Observable<Posts>{
     return this.http.post<Posts>(this.url, posts);
   }
}
