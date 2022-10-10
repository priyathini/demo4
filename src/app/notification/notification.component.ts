import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private bhservice: ServiceService) { }
  

  ngOnInit(): void {
  }
 
   
  
  Addone() {
  this.bhservice.increase();
    
  }

}
