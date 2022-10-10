import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  Name ='';
  UserName="";
  Id=1;


  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(data =>{
      this.Id= data['id'];
    })
    
  }

   

  ngOnInit(): void {
  }
 
}
