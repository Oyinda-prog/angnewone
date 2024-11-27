import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactappedit',
  standalone: true,
  imports: [],
  templateUrl: './contactappedit.component.html',
  styleUrl: './contactappedit.component.css'
})
export class ContactappeditComponent {
constructor(public actroute:ActivatedRoute){}
public index:number=0
ngOnInit(){
  this.index=this.actroute.snapshot.params['id']
  console.log(this.index);
  
  // console.log(this.actroute.snapshot.params['id']); 
}
}
