import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BehaviorsubjectService } from '../services/behaviorsubject.service';

@Component({
  selector: 'app-studentprofileedit',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './studentprofileedit.component.html',
  styleUrl: './studentprofileedit.component.css'
})
export class StudentprofileeditComponent {
  // formone:FormGroup
  constructor(public router:Router,public builder:FormBuilder, public serve:BehaviorsubjectService){
//     this.formone=this.builder.group({
//  fullname:'',
//  phonenumber:'',
//  email:'',
//  age:'',
//  department:'',
//  class:''

//     })
  }
public fullname=''
public email=''
public phonenumber=''
public class=''
public age=''
currentstudent:any
studentarray:any=[]
index:number=0
department=''
bool=false
msg=''
data:any
registrationnumber=''
deletedstudents:any=[]
ngOnInit(){ 
  this.serve.studentbehavior.subscribe((data:any)=>{
    this.data=data 
  })  
  if(localStorage['studentarray']){
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
  }
  this.deletedstudents=JSON.parse(localStorage.getItem('deletedstudents')!)
  this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
  this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
  this.index=JSON.parse(localStorage.getItem('studentindex')!)
  this.fullname=this.data.fullname;
  this.email=this.data.email;
  this.phonenumber=this.data.phonenumber;
  this.age=this.data.age;
  this.registrationnumber=this.data.registrationnumber;
  
}
checkchange(){
  if(this.class=='Junior Secondary School 1 (JSS1)'|| this.class=='Junior Secondary School 2 (JSS2)' ||this.class=='Junior Secondary School 3 (JSS3)'){
    this.bool=false
    }
    if(this.class=='Senior Secondary School 1 (SSS1)'|| this.class=='Senior Secondary School 2 (SSS2)' ||this.class=='Senior Secondary School 3 (SSS3)'){
      this.bool=true
        }
      
}
editprofile(){  
  let studentobj:any={
    fullname:this.fullname,
    email:this.email,
    password:this.currentstudent.password,
    phonenumber:this.currentstudent.phonenumber,
    image:this.currentstudent.image,
    courses:this.currentstudent.courses,
    registrationnumber:this.currentstudent.registrationnumber,
    gender:this.currentstudent.gender,
    age:this.age,
    class:this.class,
    department:this.bool==true?this.department:null
  }
   
this.studentarray.splice(this.index,1,studentobj)
localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
this.fullname=this.studentarray[this.index].fullname;
  this.msg='Successfully Updated'
   if(this.msg='Successfully Updated'){
    this.serve.studentbehavior.next({
    fullname: this.studentarray[this.index].fullname,
   phonenumber:this.studentarray[this.index].phonenumber,
   email:this.studentarray[this.index].email,
   age:this.studentarray[this.index].age,
   registrationnumber:this.studentarray[this.index].registrationnumber,
  })
   }

}
// del(){ 

// this.studentarray.splice(this.index,1)
// if(this.studentarray.splice(this.index,1)){
//   // this.deletedstudents.push(this.currentstudent)
//   localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
// localStorage.setItem('currentstudent',JSON.stringify(''))
// this.router.navigate(['/'])
//   localStorage.setItem('deletedstudents',JSON.stringify(this.deletedstudents))
//   console.log(this.deletedstudents);
  
// }

// }

}
