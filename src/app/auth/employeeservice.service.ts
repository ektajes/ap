import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, ObservableLike} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
// url='http://localhost:44385/';
//   constructor(private http:HttpClient) { }
//   createemployee(employee:Employee):Observable<Employee>{
//     return this.http.post<Employee>(this.url+'api/Admins2',employee)
//   }

url="http://localhost:3000/posts";

constructor(private http:HttpClient){}
getemployee():Observable<Employee>{

  return this.http.get<Employee>(this.url);
}
createemployee(employee:Employee):Observable<Employee>{
  return this.http.post<Employee> (this.url, employee);
}
}

