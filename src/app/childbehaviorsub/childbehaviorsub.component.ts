import { Component } from '@angular/core';
import { BehaviorsubjectService } from '../services/behaviorsubject.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-childbehaviorsub',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './childbehaviorsub.component.html',
  styleUrl: './childbehaviorsub.component.css'
})
export class ChildbehaviorsubComponent {
// constructor(public behaviorsub:BehaviorsubjectService, public build:FormBuilder){}
one:FormGroup;
constructor(private build: FormBuilder) {
this.one=this.build.group({
fname:['',[Validators.required,Validators.maxLength(4)]],
age:['',Validators.minLength(3)],
lname:''
})
}

public data=''
public firstnam=''
public lastname=''
public emil=''

sub(){
  console.log(this.one.controls['fname'].setValue(''));
}
ngOnInit(){
  
  
  //console.log(this.behaviorsub.behavior);
  //this.behaviorsub.behavior.subscribe(data=>{
    //console.log(data);
    //this.data=data
  //})
  
}


}
