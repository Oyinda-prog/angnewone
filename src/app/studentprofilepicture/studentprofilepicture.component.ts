import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-studentprofilepicture',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './studentprofilepicture.component.html',
  styleUrl: './studentprofilepicture.component.css'
})
export class StudentprofilepictureComponent {
  public studentarray:any=[]
  msg=''
  currentstudent:any
  image:any
  index:number=0
  img:any
  
  ngOnInit(){
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.index=JSON.parse(localStorage.getItem('studentindex')!)
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
    if(this.image==null){
      this.msg='Please select image';
      
    }
    else{
      this.studentarray[this.index].image=this.image
      console.log(this.studentarray);
      localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
      this.msg='Uploaded Successfully'
     console.log(this.image);
    }
   
   }
}
