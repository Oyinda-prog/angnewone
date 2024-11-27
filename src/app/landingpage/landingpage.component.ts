import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserserviceService } from '../services/userservice.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

constructor(public userserve:UserserviceService, public log:LoginserviceService){}
public lastname=''
public msg=''

  ngOnInit(){
    console.log(this.log.behaviour);
    
    this.log.behaviour.subscribe(data=>{
      console.log(data);
      this.msg=data
  
    });
    
console.log(this.userserve.msg);
this.lastname=this.userserve.lastname

console.log(this.userserve.getlastname());
console.log(this.userserve.getage());
  }


  
}
