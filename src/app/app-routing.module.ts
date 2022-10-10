import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotificationComponent } from './notification/notification.component';
import { SlotsComponent } from './slots/slots.component';
import { SubjectComponent } from './subject/subject.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {path:"employee",component:EmployeeComponent},
  {path:"department/:id",component:DepartmentComponent},
  {path:"lazy",loadChildren:() => import ('./lazy/lazy.module').then(l => l.LazyModule)},
  {path:"subject",component:SubjectComponent},
  {path:"notification",component:NotificationComponent},
  {path: "department",component:DepartmentComponent},
  {path: "slots",component:SlotsComponent},
  {path: "user",component:UserComponent},
  {path: "angular",component:AngularComponent}




  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
