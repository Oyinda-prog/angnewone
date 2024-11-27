import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentcourseupdate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentcourseupdate.component.html',
  styleUrl: './studentcourseupdate.component.css'
})
export class StudentcourseupdateComponent {
  currentstudent:any={}
  studentarray:any=[]
  index:number=0
  studentcourseindex=0
  allcourses:any=
  ['Agricultural Science','Animal Husbandry','Arabic','Basic Science','Biology','Bookkeeping','Business Studies','Chemistry','Christian Religion Studies (CRS)','Civic Education','Commerce','Computer Studies','Creative Arts','Data Processing']
    existingcourses:any
    msg=''

  ngOnInit(){
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.index=JSON.parse(localStorage.getItem('studentindex')!)
    this.studentcourseindex=JSON.parse(localStorage.getItem('studentcourseindex')!)
    console.log(this.studentarray[this.index].courses);
   
  }
  add(i:number){
    
  console.log(this.allcourses[i]);
for (let index = 0; index < this.studentarray[this.index].courses.length; index++) {
  const element =this.studentarray[this.index].courses[index];
  console.log(element);
  
  this.existingcourses=element
  // console.log(this.existingcourses);
}
if(this.allcourses[i]==this.existingcourses){
this.msg='Course exists already, you cannot add a course twice'
 }
 else{
  this.studentarray[this.index].courses.push(this.allcourses[i])
  localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
  console.log(localStorage['studentarray']);
  this.msg='Successfully Added'
 }

  }
}
