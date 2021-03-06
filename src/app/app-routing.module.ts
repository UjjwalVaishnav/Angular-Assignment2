import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { LeaveConfigComponent } from './leave-config/leave-config.component';
import { LeaveConfigEditComponent } from './leave-config/leave-config-edit/leave-config-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { LoginComponent } from './login/login.component';
import { LeaveListComponent } from './leave-list/leave-list.component';




@NgModule({
  imports: [RouterModule.forRoot([
    {path:'employees',component:EmployeeComponent},
    {path:'employees/:id/edit',component:EmployeeEditComponent},
    {path:'leaveConfig',component:LeaveConfigComponent},
    {path:'leaveConfig/:id/edit',component:LeaveConfigEditComponent},
    {path:'profile/:id',component:ProfileComponent},
    {path:'profile/:id/edit',component:ProfileEditComponent},
    {path:'login',component:LoginComponent},
    {path:'leaveList',component:LeaveListComponent},

    {path:'',redirectTo:'employees',pathMatch:'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
