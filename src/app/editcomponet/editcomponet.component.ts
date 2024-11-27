import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
interface ContactInterface{
  Firstname:string,
  Lastname:string,
  Email:string,
  Phonenumber:string
  }
@Component({
  selector: 'app-editcomponet',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editcomponet.component.html',
  styleUrl: './editcomponet.component.css'
})
export class EditcomponetComponent {
  constructor(public route:ActivatedRoute, public routes:Router){}
public firstname:string=''
public lastname:string=''
public email:string=''
public phonenumber:string=''
public contactobj:ContactInterface[]=[]
public i:number=0
public obj:ContactInterface={
  Firstname:'',
  Lastname:'',
  Email:"",
  Phonenumber:""
}
ngOnInit(){
  this.contactobj=JSON.parse(localStorage.getItem('contactobj')!)
  console.log(this.contactobj);
  
  console.log(this.route.snapshot.params['index']);
  console.log(this.route);
  
  let i=this.route.snapshot.params['index']
  console.log(this.contactobj[i]);
  this.i=i
  this.firstname=this.contactobj[this.i].Firstname

}
upd(){
  let newobj={
    Firstname:this.firstname,
    Lastname:this.lastname,
    Email:this.email,
    Phonenumber:this.phonenumber
  }
  this.obj=newobj
  this.contactobj.splice(this.i,1,newobj)
  localStorage.setItem('contactobj',JSON.stringify(this.contactobj))
console.log(localStorage['contactobj']);
// if(  localStorage['contactobj']){
//   this.routes.navigate(['contact'])
// }
  
// this.contactobj[this.i].Firstname=this.firstname
}
}
