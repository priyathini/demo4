import { NgModule } from '@angular/core';
import { PipeModule } from '../pipe/pipe.module';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [],
  imports: [
  SharedModule,
  PipeModule
    
  ]
})
export class EmployeeModule { }
