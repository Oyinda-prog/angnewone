import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentdashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent {
  constructor(public router:Router){}
public studentarray:any=[]
msg=''
currentstudent:any
newpasswordone=''
newpasswordtwo=''
oldpassword=''
image:any
index:number=0

ngOnInit(){
  this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
  this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
  this.index=JSON.parse(localStorage.getItem('studentindex')!)
  if(this.studentarray[this.index].status=='Deactivated'){
    this.router.navigate(['/'])
  } 
}
changepassword(){

  if(this.studentarray[this.index].password==this.oldpassword && this.newpasswordone==this.newpasswordtwo ){
    this.currentstudent.password=this.newpasswordone
    this.studentarray[this.index].password=this.newpasswordone
    localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
    this.msg='Updated Successfully'
  
     
    }
    else{
      
    if(this.newpasswordone!==this.newpasswordtwo){
      this.msg='Same password required for new password'
      }
      if(this.studentarray[this.index].password!==this.oldpassword){
        this.msg='wrong old password'
              }
    }

  
}
fileselected(event:any){
 // console.log(event.target.files[0]);
 let img=event.target.files[0]
 if(img){
   let convertimg=new FileReader();
   
   convertimg.onload=()=>{
     this.image=convertimg.result
     // console.log(this.image);
     
   }
   convertimg.readAsDataURL(img)
 }
}
upload(){
  this.studentarray[this.index].image=this.image
  console.log(this.studentarray);
  localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
 console.log(this.image);
 
 }


 logout(){
  localStorage.removeItem('currentstudent')
  this.router.navigate(['/'])
 }
}
