import { Component, OnInit } from '@angular/core';
import { employee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees:employee[]=[];
  emp:employee;
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      employee => {this.employees = employee}
    );
  }

  deleteEmployee(id:number): void {
    if (confirm(`Really delete the employee?`)) {
     this.employeeService.deleteEmployee(id).subscribe(
      () => console.log('Deleted'),
     );
     this.ngOnInit();
    }
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe(
      employee => this.onEmployeeRetrieved(employee)
    );
  }
  onEmployeeRetrieved(employee: employee): void {
    this.emp=employee;
  }



}
