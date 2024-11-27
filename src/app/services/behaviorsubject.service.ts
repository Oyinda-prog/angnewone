import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorsubjectService {
currentstudent:any=JSON.parse(localStorage.getItem('currentstudent')!)
studentarray:any=JSON.parse(localStorage.getItem('studentarray')!)
index=JSON.parse(localStorage.getItem('studentindex')!)
  
 public getstudent(){
   return this.index=34
  }
  public behavior=new BehaviorSubject('Oyindamola')


  public studentbehavior=new BehaviorSubject({
   fullname: this.studentarray[this.index].fullname,
   phonenumber:this.studentarray[this.index].phonenumber,
   email:this.studentarray[this.index].email,
   age:this.studentarray[this.index].age,
   registrationnumber:this.studentarray[this.index].registrationnumber,
  })
}
