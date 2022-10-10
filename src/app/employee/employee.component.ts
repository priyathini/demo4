import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
employee_detail = [{id :1,Employee_Name: 'Priyathini'},
{id :1,Employee_Name: 'mythili'},
{id :2,Employee_Name: 'Priya'},
{id :3,Employee_Name: 'mohana'},
{id :4,Employee_Name: 'monika'},
{id :5,Employee_Name: 'shobana'}]

}
