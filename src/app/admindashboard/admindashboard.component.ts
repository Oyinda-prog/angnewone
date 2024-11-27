import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(public router:Router){}
  public studentarray:any=[]
  msg='Delete Account'
  currentadmin:any
  newpasswordone=''
  newpasswordtwo=''
  oldpassword=''
  image:any
  index:number=0
  adminindex=0
  
  ngOnInit(){
    this.currentadmin=JSON.parse(localStorage.getItem('currentadmin')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.adminindex=JSON.parse(localStorage.getItem('adminindex')!)
  }
  del(i:any){
      this.studentarray[i].status='Deactivated'
      localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
      if( this.studentarray[i].status=='Deactivated'){
           this.studentarray[i].password='23ede345tyuui456'
        localStorage.setItem('studentarray',JSON.stringify(this.studentarray)) 
          }


  }
}
