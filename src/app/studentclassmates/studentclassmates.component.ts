import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentclassmates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentclassmates.component.html',
  styleUrl: './studentclassmates.component.css'
})
export class StudentclassmatesComponent {
  public currentstudent:any
  public studentarray:any=[]
  public index=0
  currentclass=''
  classmates:any=[]
  public msg=''

  ngOnInit(){
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.index=JSON.parse(localStorage.getItem('studentindex')!)
    this.currentclass=this.currentstudent.class
    
  console.log(this.currentclass);
  if(this.currentclass!=undefined){
this.classmates=this.studentarray.filter((student:any)=>student.class==this.currentclass)
// console.log(this.classmates);
this.classmates=this.classmates.filter((student:any)=>student.registrationnumber!==this.studentarray[this.index].registrationnumber)
console.log(this.classmates);
  }
  if(this.classmates.length==0){
  this.msg='No classmates yet'
  }
  // else{
  //   alert('classmates dey')
  // }
  
  }
  
}
