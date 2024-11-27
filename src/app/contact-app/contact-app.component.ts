import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginserviceService } from '../loginservice.service';
import { LocalizedString } from '@angular/compiler';
import { LandingpageComponent } from '../landingpage/landingpage.component';
interface ContactInterface{
Firstname:string,
Lastname:string,
Email:string,
Phonenumber:string
}
@Component({
  selector: 'app-contact-app',
  standalone: true,
  imports: [FormsModule, CommonModule,NavbarComponent],
  templateUrl: './contact-app.component.html',
  styleUrl: './contact-app.component.css'
})
export class ContactAppComponent {
  public contactdetails:any=[]
constructor(public route:Router, public log:LoginserviceService){
}
public be='who are you?'
public msg=''
public firstname:string=''
public lastname:string=''
public email:string=''
public phonenumber:string=''
public contactarray:(ContactInterface)[]=[]



ngOnInit(){
  this.log.getallcontacts()
  console.log(this.log.getallcontacts());
  this.contactarray=this.log.getallcontacts()
  // console.log(localStorage['contactobj']);

  
  
  // if(localStorage['contactobj']){
  //   this.contactarray=JSON.parse(localStorage.getItem('contactobj')!)
  //   console.log(this.contactarray);
    
  //   // this.contactarray=localStorage['contactobj']

  // }
  // else{
  //   this.contactarray=[] 
  // }
}
creates(){
  this.log.create(this.firstname,this.lastname,this.email,this.phonenumber);
// console.log(this.log.sendmsg());
  this.msg=this.log.sendmsg()

   
}

delety(i:number){
this.log.sendindex(i)
}

create(){
  // alert(this.firstname)
//   let contactobj={
//     Firstname:this.firstname,
//     Lastname:this.lastname,
//     Email:this.email,
//     Phonenumber:this.phonenumber,
    
//   }
// this.contactarray.push(contactobj)
// localStorage.setItem('contactobj',JSON.stringify(this.contactarray))
// console.log(localStorage['contactobj']);
}

viewcont(i:number){
this.log.viewcontact(i)
}
check(){
this.route.navigate(['/contact/edit'])
}


viewcontact(i:number){
  localStorage.setItem('viewobject', JSON.stringify(this.contactarray[i]))
  console.log(localStorage['viewobject']);
  
// alert(i)
}



del(i:number){
  console.log(i);
  this.contactarray.splice(i,1)
  localStorage.setItem('contactobj',JSON.stringify(this.contactarray))
}

view(i:number){
  this.route.navigate([`contact/edit/${i}`])
  // this.routes.navigate(['contact/view'])
  // localStorage.setItem('contactindex',JSON.stringify(i))
}
}
