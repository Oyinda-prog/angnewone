import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentsignup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './studentsignup.component.html',
  styleUrl: './studentsignup.component.css'
})
export class StudentsignupComponent {
constructor(public router:Router ){}
public fullname=''
public email=''
public password=''
public phonenumber=''
public studentarray:any=[]
public registrationnumber=0
public class=''
public age=''
public gender=''
public department=''
public bool=true

ngOnInit(){
  if(localStorage['studentarray']){
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
  }
}

checkchange(){
  console.log(345);
  
  if(this.class=='Junior Secondary School 1 (JSS1)'|| this.class=='Junior Secondary School 2 (JSS2)' ||this.class=='Junior Secondary School 3 (JSS3)'){
  this.bool=false
  
  }
  if(this.class=='Senior Secondary School 1 (SSS1)'|| this.class=='Senior Secondary School 2 (SSS2)' ||this.class=='Senior Secondary School 3 (SSS3)'){
    this.bool=true
    
      }
}
signup(){
let studentobj:any={
  fullname:this.fullname,
  email:this.email,
  password:this.password,
  phonenumber:this.phonenumber,
  image:null,
  courses:null,
  registrationnumber:Math.round(Math.random()*1000)+'/honeywealth/'+Math.round(Math.random()*945),
  gender:this.gender,
  age:this.age,
  class:this.class,
  department:this.bool==true?this.department:null,
  notekeep:[],
  status:'Active',
  receipt:[]
}
this.studentarray.push(studentobj)
localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
this.router.navigate(['studentsignin'])
}
}
