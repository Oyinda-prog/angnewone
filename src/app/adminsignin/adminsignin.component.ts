import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminsignin.component.html',
  styleUrl: './adminsignin.component.css'
})
export class AdminsigninComponent {
  constructor(public router:Router){}
  public email=''
  public password=''
  public msg=''
  public adminarray:any=[]
  
  ngOnInit(){
  this.adminarray=JSON.parse(localStorage.getItem('adminarray')!)
  console.log(localStorage['studentarray']);
  console.log(localStorage['adminarray']);
  
  }
  signin(){
    let index=this.adminarray.findIndex((admin:any)=>admin.email==this.email && admin.password==this.password)
    
    let admin=this.adminarray.find((admin:any,index:number)=>admin.email==this.email && admin.password==this.password)
    
    if(admin){
      localStorage.setItem('currentadmin',JSON.stringify(admin))
      localStorage.setItem('adminindex',JSON.stringify(index))
      this.router.navigate(['admindashboard'])
    }
    else{
      this.msg='Incorrect Email or password'
    }
    
  }
}
