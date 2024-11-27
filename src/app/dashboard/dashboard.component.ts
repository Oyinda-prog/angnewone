import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { ProfileComponent } from '../profile/profile.component';
import { BehaviorsubjectService } from '../services/behaviorsubject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public log:LoginserviceService, public beh:BehaviorsubjectService){}
  public firstname:any;
  public image:any
  public arr:any=[]
  public array:any=[]
  data=''

  ngOnInit(){
     this.array=JSON.parse(localStorage.getItem('imgobj')!)
    // this.beh.behavior.subscribe(data=>{
    // this.data=data
    // })
    // this.arr=JSON.parse(localStorage.getItem('contactobj')!)
    // console.log(this.arr);
    
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
  sending(){
    console.log(this.firstname);
    
    let objone={
      firstname:this.firstname,
      img:this.image
    }
    this.array.push(objone)
    localStorage.setItem('imgobj',JSON.stringify(this.array))
    
    console.log(this.array);
    
    }
    
    

// sends(item:any){
//  this.log.behaviour.next(item) 
// console.log(item);

// }
}
