import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usersignin.component.html',
  styleUrl: './usersignin.component.css'
})
export class UsersigninComponent {
  constructor(public router:Router){}
public email=''
public password=''
public userarray:any=[]
msg:any

ngOnInit(){
  this.userarray=JSON.parse(localStorage.getItem('userarray')!)
  console.log(this.userarray);
  
}
  signin(){
let user=this.userarray.find((user:any,index:number)=>user.email==this.email && user.password==this.password)
 if(user){
  localStorage.setItem('user',JSON.stringify(user))
  this.router.navigate(['userdashboard'])
console.log('userfound');

}
else{
  this.msg='incorrect login details'
}
  }
}
