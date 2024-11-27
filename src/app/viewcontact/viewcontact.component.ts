import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-viewcontact',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewcontactComponent {
  constructor(public loginser:LoginserviceService){}
public contactinfo:any={}

ngOnInit(){
// console.log(localStorage['viewobject']);
this.contactinfo=JSON.parse(localStorage.getItem('viewobject')!)
console.log(this.contactinfo);
this.contactinfo=this.loginser.viewobj()


}
}