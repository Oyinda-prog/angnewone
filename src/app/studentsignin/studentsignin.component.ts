import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentsignin',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './studentsignin.component.html',
  styleUrl: './studentsignin.component.css'
})
export class StudentsigninComponent {
constructor(public router:Router){}
public studentarray:any=[]
public email=''
public password=''
public msg=''
public deletedstudents:any=[]

ngOnInit(){
this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
this.deletedstudents=JSON.parse(localStorage.getItem('deletedstudents')!)
console.log(localStorage['studentarray']);

}
signin(){
  let index=this.studentarray.findIndex((student:any)=>student.email==this.email && student.password==this.password)
  // if(this.deletedstudents==null){
  //   alert('null')
  // }
  // else{

  //   let deletedstudent=this.deletedstudents.find((student:any)=>student.email==this.email && student.password==this.password)
  //   console.log(deletedstudent);
  // }

  // console.log(index);
  
  let student=this.studentarray.find((student:any,index:number)=>student.email==this.email && student.password==this.password)
  
  if(student){
    localStorage.setItem('currentstudent',JSON.stringify(student))
    localStorage.setItem('studentindex',JSON.stringify(index))
    this.router.navigate(['studentdashboard'])
  }
  else{
    this.msg='Incorrect Email or password'
  }

  let deletedstudent=this.studentarray.find((student:any)=>student.email==this.email && student.status=='Deactivated')
  if(deletedstudent){
    this.msg="Authentication Failed, contact the School Administrator"
  }
  // console.log(deletedstudent);
  
  
}
}
