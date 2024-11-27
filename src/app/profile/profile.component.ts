import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(public log:LoginserviceService){}
  public data:any
ngOnInit(){
this.log.behaviour.subscribe(data=>{
  this.data=data
  
})
}
}
