import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewnoteapp',
  standalone: true,
  imports: [],
  templateUrl: './viewnoteapp.component.html',
  styleUrl: './viewnoteapp.component.css'
})
export class ViewnoteappComponent {
constructor(public actr:ActivatedRoute){}
public noteobj:any={}
ngOnInit(){
  this.noteobj=JSON.parse(localStorage.getItem('singlenote')!)
  console.log(this.actr.snapshot,this.noteobj);
  
}
}
