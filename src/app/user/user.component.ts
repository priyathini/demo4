import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
  isedit: boolean = false;
  @ViewChild('userForm')
  editval!: NgForm;
  id!: NgForm

  edit(id: NgForm, edit: NgForm) {
    this.editval.setValue(edit);
    console.log('editval', this.editval)
  }


  users: any = []

  constructor(private api: ApiService) {
    this.api.apicall().subscribe((data) => {
    this.users = data;
 });


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(myform: NgForm) {
  const newMyform = { 'id': myform.value.id, 'name': myform.value.name, 'username': myform.value.username, 'email': myform.value.email };
  this.api.apipost(newMyform).subscribe(data => {
  });
  this.refresh();
  alert('User Detailes Submitted Successfuly')
  }
  refresh() {
    this.api.apicall().subscribe((data) => {
      this.users = data;
  });
  }
  //   Update(id:any,editval:any){

  //     console.log('id update',id);
  //     console.log('Edited form value', editval)

  //     this.api.apiupdate(id, editval).subscribe(data=>{
  //        console.log('updated!', data);
  //     });
  // }

  Update(id: any, form: NgForm) {

    // const newFormData = { 'id':'rt', 'name':'ghjk', 'username': 'periya','email':'periya@'}
      if(this.editval.value.id== id){console.log(id)
        const newFormData = { 'id':this.editval.value.id, 'name':this.editval.value.name,
         'username': this.editval.value.username,'email':this.editval.value.email}
        this.api.apiupdate(id,newFormData).subscribe(data => {
          console.log('updated!', data);}
       );
         this.refresh();
        }
      
       }
     
  
  Delete(id: any) {

    this.api.apiDelete(id).subscribe(data => {
      console.log('delete!', data);
      this.refresh();
    });
  }
}

