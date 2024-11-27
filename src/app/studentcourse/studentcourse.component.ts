import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentcourse',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './studentcourse.component.html',
  styleUrl: './studentcourse.component.css'
})
export class StudentcourseComponent {
  public allcourses:any=[];
public selectedcourses:any=[]
studentarray:any=[]
currentstudent:any={}
index:any
uniquecourses:any
ngOnInit(){
  this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
  this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
  this.index=JSON.parse(localStorage.getItem('studentindex')!)
}
send(){
//   if(this.studentarray[this.index].courses==null){
// alert('not defined')
//   }
 if(this.studentarray[this.index].courses==null){
// console.log('no details entered');

  this.allcourses=[...this.selectedcourses]
  this.studentarray[this.index].courses=[...this.allcourses]
  console.log(this.studentarray[this.index].courses);
  localStorage.setItem('studentarray',JSON.stringify(this.studentarray))

 }
 else{
  alert('already exists')
 }
  
  // console.log(localStorage['studentarray']);
  
}

  // this.studentarray[this.index].courses.push(this.allcourses);
  // console.log(this.studentarray[this.index].courses);
  
  
// for (let index = 0; index < this.studentarray[this.index].courses[0].length; index++) {
//   const element = this.studentarray[this.index].courses[0][index];
//   console.log(element); 
//   this.uniquecourses=element 
// }
// if(this.uniquecourses==null){
// alert('courses selected already')
// }
// else{
//   alert('not selected')
//   // this.allcourses=[...this.selectedcourses]

//   // this.studentarray[this.index].courses.push(this.allcourses);
//   // console.log(this.studentarray);
  
// }
del(i:number){
  this.studentarray[this.index].courses.splice(i,1)
  localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
  
console.log(localStorage['studentarray']);

}

add(i:number){
  localStorage.setItem('studentcourseindex',JSON.stringify(i))
}

}

