import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  [x: string]: any;

  



  constructor(private bhsubject: SubjectService) {
  this.bhsubject.bhsub.subscribe(x => (x));
  }

  add() {
    this.bhsubject.notification(this['x']++);
  }

  ngOnInit(): void {  
  }
   
}
