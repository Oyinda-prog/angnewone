import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noteapp',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './noteapp.component.html',
  styleUrl: './noteapp.component.css'
})
export class NoteappComponent {
formone:FormGroup;
formtwo:FormGroup
public notearray:any=[]
public title=''
public content=''
public index:number=0
public createdat=new Date().toLocaleTimeString()
public currentstudent:any
public studentarray:any
public studentindex=0
public msg=''

constructor(public build:FormBuilder, public route:Router){
  
  this.formone=this.build.group({
    title:"",
    content:'',
    createdat:this.createdat
  });
  this.formtwo=this.build.group({
      title:'',
      content:'',
      createdat:this.createdat
  })
}
ngOnInit(){
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.studentindex=JSON.parse(localStorage.getItem('studentindex')!)

  if(localStorage['noteapp']){
    this.notearray=JSON.parse(localStorage.getItem('noteapp')!)
  }
}
create(){
console.log(this.studentarray[this.studentindex]);

  
  // this.notearray.push(this.formone.value)
   console.log(this.studentarray[this.studentindex].notekeep);
   if(this.studentarray[this.studentindex].notekeep==undefined){
    this.msg='Not qualified to create note'
   }
   else{
    this.studentarray[this.studentindex].notekeep.push(this.formone.value)
  localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
  console.log(this.studentarray[this.studentindex]);
   }
  
  // console.log(localStorage['studentarray']);
  
  
  
  //  localStorage.setItem('noteapp',JSON.stringify(this.notearray))
  //  this.formone.controls['title'].setValue('')
  //   this.formone.controls['content'].setValue('')
  
}
del(i:number){
  this.studentarray[this.studentindex].notekeep.splice(i,1)
localStorage.setItem('studentarray',JSON.stringify(this.studentarray))

}
editty(i:number,note:any){
  // console.log(this.notearray[i].content);
  console.log(this.studentarray[this.studentindex].notekeep[i]);
  
  localStorage.setItem('studentnoteappindex',JSON.stringify(i))
this.title=note.title
this.content=note.content

}
savechanges(){
  this.index=localStorage['studentnoteappindex']
  console.log(this.index);
  
  this.studentarray[this.studentindex].notekeep.splice(this.index,1,this.formtwo.value)
  localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
  console.log(localStorage['studentarray']);
  
// console.log(this.formtwo.value);


}

sendindex(i:number,note:any){
  localStorage.setItem('singlenote',JSON.stringify(note))
this.route.navigate([`noteapp/${i}`])
}
}
