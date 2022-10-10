import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { SubjectService } from '../subject/subject.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bhsubCount!: number;


  constructor(private serviceCount: ServiceService, private bhsubject: SubjectService) {
    this.bhsubject.bhsub.subscribe(x => {
      console.log(x)
      this.bhsubCount = x
    })
      ;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  







}
