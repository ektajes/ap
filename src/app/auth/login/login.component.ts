import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginEmployee } from './../loginemp';
import { RegistrationComponent } from '../registration/registration.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  regForm!:FormGroup;
  massage!: string;
  Error = false;
  username!:string;
password!:number;
  constructor( private employeeservice:EmployeeserviceService, private http:HttpClient, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    localStorage.removeItem('username');
    this.setFormState();
    
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  onSubmit(loginForm:any){
    let login=this.loginForm.value;
    this.username=this.loginForm.controls.Username.value;
      this.password=this.loginForm.controls.Password.value;

    this.login(login);
  }
 login(login:any){

  this.employeeservice.getemployee().subscribe(res=>{
    // var succ=res;

const user= res.find((a:any)=>{
return a.EmailId== this.loginForm.value.Username && a.Password === this.loginForm.value.Password;
})

if(user){
      // localStorage.setItem('employee', JSON.stringify('a'));
  localStorage.setItem('username','a.EmailId');

alert("login success");


this.loginForm.reset();
this.router.navigate(['/dashboard']);
}
else{
alert("user not found");
}


  })
 }

}



