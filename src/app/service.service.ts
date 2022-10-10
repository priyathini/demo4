import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public count:number =0;

  constructor() { }
  increase(){

    this.count++;

  }
}
