import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.css'
})
export class UsersignupComponent {
  constructor(public router:Router){}
public fullname=''
public password=''
public email=''
public phonenumber=''
public userarray:any=[]
public msg=''

ngOnInit(){
if(localStorage['userarray']){
  this.userarray=JSON.parse(localStorage.getItem('userarray')!)
}
}
create(){
let user=this.userarray.find((user:any,index:number)=>user.email==this.email)
if(user){
this.msg='User exists already'
}
else{

  let userobj={
    fullnam:this.fullname,
    password:this.password,
    email:this.email,
    phonenumber:this.phonenumber
  }
  this.userarray.push(userobj)
  localStorage.setItem('userarray',JSON.stringify(this.userarray))
  console.log(this.userarray);
   this.router.navigate(['/usersignin'])
}
}
}
