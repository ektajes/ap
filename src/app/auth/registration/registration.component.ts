import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm!: FormGroup;
  datasaved = false;
  massage!: string;
  error?:string;
  constructor(private formbuilder: FormBuilder, private employeeservice: EmployeeserviceService) { }

  ngOnInit() {
    this.setFormState();
    this.getemp();
  }
  getemp(){
    this.employeeservice.getemployee().subscribe((res)=>{
      console.log(res);
    })
  }
  setFormState(): void {

    this.regForm = this.formbuilder.group({
      LastName: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit(regForm:any) {
    
    let employee = this.regForm.value;

    this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created successfully";
       this.regForm.reset();
      }
    )
  }
  
}

                        

                                    
