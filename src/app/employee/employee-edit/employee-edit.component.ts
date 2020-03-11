import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from '../employee.service';
//import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  employee:employee={
    id:null,
    fname:null,
    lname:null,
    email:null,
    address:null,
    contact:null,
    gender:null,
    username:null,
    password:null,
    qualification:null,
    experience:null,
    codingLanguages:[]
  }
  qualification:string[];
  experience:number[];
  codingLanguages:any[];
  public id:number;
  constructor(private router:Router,private employeeService:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.qualification=['BCA','MCA','CE'];
    this.experience=[0,1,2,3];
    this.codingLanguages=[
      {name:'C/C++',id:1},
      {name:'Java',id:2},
      {name:'Python',id:3}
    ];
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee.id=this.id;
    this.employeeService.getEmployee(this.id).subscribe(
      employee => {this.employee = employee}
    );
  }
  saveEmployee(): void {
    for(var i=1;i<4;i++)
    {
      if((<HTMLInputElement>document.getElementById('lang'+i)).checked)
      {
        this.employee.codingLanguages[i-1]=(<HTMLInputElement>document.getElementById('lang'+i)).value;
      }
    }
      if (this.id === 0) {
        this.employeeService.addEmployee(this.employee).subscribe({
          next: () => this.router.navigate(['/employees']),
          error: err => console.log('error')
        });
      } else {
        this.employeeService.updateEmployee(this.employee).subscribe({
          next: () => this.router.navigate(['/employees']),
          error: err => console.log('error')
        });
      }

  }
}
