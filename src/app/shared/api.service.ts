import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api : HttpClient) { }
  apicall(){
    return this.api.get("http://localhost:3000/users")
  }
  apipost(data:any){
    return this.api.post("http://localhost:3000/users", data);
   }
  apiupdate(id: any, updatedBody: any){
    return this.api.put("http://localhost:3000/users/" + id, updatedBody);
   } 
   apiDelete(id: any){
    return this.api.delete("http://localhost:3000/users/" + id);
   } 
}
