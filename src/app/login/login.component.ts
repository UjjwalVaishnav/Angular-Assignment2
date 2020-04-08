import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service';
import { employee } from '../employee/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employees:employee[]=[];

  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      employee => {this.employees = employee}
    );
  }
  login():void{
    var email=document.getElementById("email");
    console.log(email);
    for (let index = 0; index < this.employees.length; index++) {
      if(this.employees[index].email)
      {
        console.log(email);
      }

    }
  }

}
