import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';




@NgModule({
  imports: [RouterModule.forRoot([
    {path:'employees',component:EmployeeComponent},
    {path:'employees/:id/edit',component:EmployeeEditComponent},
    {path:'',redirectTo:'employees',pathMatch:'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
