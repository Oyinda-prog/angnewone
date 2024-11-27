import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { EditcomponetComponent } from './editcomponet/editcomponet.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

interface Obj{
fullname:string,
phonenumber:string,
state:string,
email:string|number
}
interface Objthree{
  name:string,
  age:number,
  personalinfo:[{
    firstname:string,
    lastname:string,
    age:number
  }]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ContactAppComponent,EditcomponetComponent,LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'pttwofolderttyy';

   public phonenumber:any='i889999'
 //union, interface, inference

  public objthree:Objthree={
  name:'',
  age:67,
  personalinfo:[{
    firstname:'Ife',
    lastname:"",
    age:50
  }
  ]
 }
public address:undefined|number|string
public firstname='Oyindamola'
public age=90
public bool=true

public arrayone:(number|Obj)[]=[1,2,7,8,9,{
  fullname:"",
  email:'',
  phonenumber:'',
  state:''
}]


//without using the interface
public objone:{
  name:string,
  age:number,
  address:string,
  Color:string
}={
  name:'DANIEL',
  age:78,
  address:'LAGOS',
  Color:'red'
}
//with interface
public objtwo:Obj={
fullname:"",
phonenumber:"",
state:'',
email:67
}

public lastname:string|number=60
public check:boolean=true

// let x=10
// x='shola'

 signup(){
  this.address=67
this.lastname=89
  this.lastname=''
  this.check=false
  //  let firstname=''
 }
}
