import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectComponent } from './subject/subject.component';
import { NotificationComponent } from './notification/notification.component';
import { SubjectService } from './subject/subject.service';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SlotsComponent } from './slots/slots.component';
import { UserComponent } from './user/user.component';
import { AngularComponent } from './angular/angular.component';
import { MatSliderModule } from '@angular/material/slider';
 
 





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    SubjectComponent,
    NotificationComponent,
    HeaderComponent,
    SlotsComponent,
    UserComponent,
    AngularComponent,
    
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
