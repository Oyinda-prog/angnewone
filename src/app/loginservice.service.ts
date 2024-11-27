import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

public msg=''
public firstname:string=''
public lastname:string=''
public email:string=''
public phonenumber:string=''
public contactarray:any=[]
public contactobject:any={}

public behaviour=new BehaviorSubject<any>('hello')
getallcontacts(){

  
  if(localStorage['contactobj']){
    this.contactarray=JSON.parse(localStorage.getItem('contactobj')!)
    // this.contactarray=localStorage['contactobj']
    console.log(this.contactarray);
    
    
  }
  else{
    this.contactarray=[]
  }
  return this.contactarray
}

sendindex(ind:number){
  this.contactarray.splice(ind,1)
  localStorage.setItem('contactobj',JSON.stringify(this.contactarray))

}
viewcontact(i:number){
  this.contactobject= this.contactarray[i];
}
viewobj(){
  return this.contactobject
}


create(firstname:string,lastname:string,email:string,phonenumber:string){
  // alert(this.firstname)
   let contactobj={
    Firstname:firstname,
    Lastname:lastname,
    Email:email,
    Phonenumber:phonenumber,
    
  }
  // console.log(contactobj);
this.contactarray.push(contactobj)
localStorage.setItem('contactobj',JSON.stringify(this.contactarray))
if(localStorage['contactobj']){
  
this.msg='Successfully created'
// console.log(this.msg);
}
else{
  this.msg='Not created'
}
return this.msg

}

sendmsg(){
  return this.msg
}
// contactdetails(){
//   return JSON.parse(localStorage.getItem('contactobj')!)
// }

}

