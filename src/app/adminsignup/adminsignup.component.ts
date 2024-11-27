import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminsignup.component.html',
  styleUrl: './adminsignup.component.css'
})
export class AdminsignupComponent {
  constructor(public router:Router ){}
public fullname=''
public email=''
public password=''
public phonenumber=''
public studentarray:any=[]
public adminnumber=0
public age=''
public gender=''
public bool=true
public adminarray:any=[]

ngOnInit(){
  if(localStorage['adminarray']){
    this.adminarray=JSON.parse(localStorage.getItem('adminarray')!)
  }
}

signup(){
let adminobj:any={
  fullname:this.fullname,
  email:this.email,
  password:this.password,
  phonenumber:this.phonenumber,
  image:null,
  adminnumber:Math.round(Math.random()*10000)+'/honeywealthadmin/'+Math.round(Math.random()*100)+Math.round(Math.random()*9564),
  gender:this.gender,
  age:this.age,
  resources:[]
}
this.adminarray.push(adminobj)
localStorage.setItem('adminarray',JSON.stringify(this.adminarray))
this.router.navigate(['adminsignin'])
}


}
