import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

 
  bhsub!: BehaviorSubject<number>;
 

  constructor() {
    this.bhsub = new BehaviorSubject<number>(0)

  }
  notification(data: number) {
    this.bhsub.next(data);
  }
}
