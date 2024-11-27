import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentresetpasswordone',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './studentresetpasswordone.component.html',
  styleUrl: './studentresetpasswordone.component.css'
})
export class StudentresetpasswordoneComponent {
  constructor(public router:Router){}
public email=''
msg=''
public studentarray:any=[]
ngOnInit(){
this.studentarray=JSON.parse(localStorage.getItem('studentarray') || '[]')
}
confirm(){
let obj=this.studentarray.find((student:any)=>student.email==this.email && student.status=='Active')
if(obj){
  let studentresetindex=this.studentarray.findIndex((student:any)=>student.email==this.email && student.status=='Active')
  localStorage.setItem('studentresetindex',JSON.stringify(studentresetindex))
  console.log(localStorage['studentresetindex']);
  this.router.navigate(['/reset_password'])
}
else{
   this.msg='No user found, enter correct email address'
}
let objone=this.studentarray.find((student:any)=>student.email==this.email && student.status=='Deactivated')
if(objone){
  this.msg='Not eligible, contact the School Administrator'
  
}
}
}
