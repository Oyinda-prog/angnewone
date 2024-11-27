import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentupdatepassword',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './studentupdatepassword.component.html',
  styleUrl: './studentupdatepassword.component.css'
})
export class StudentupdatepasswordComponent {
  public studentarray:any=[]
  msg=''
  currentstudent:any
  newpasswordone=''
  newpasswordtwo=''
  oldpassword=''
  image:any
  index:number=0
  classone:any='alert alert-success'
  
  ngOnInit(){
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.index=JSON.parse(localStorage.getItem('studentindex')!)
  }
  changepassword(){
  
    if(this.studentarray[this.index].password==this.oldpassword && this.newpasswordone==this.newpasswordtwo ){
      
      console.log(this.currentstudent.password);
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
  
}
