import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
formone:FormGroup;

constructor(public builder:FormBuilder){
  this.formone=this.builder.group({
fname:['',[Validators.minLength(3), Validators.maxLength(10), Validators.required]],
pnumber:'',
email:'',
check:[false,Validators.required]
  })
}
  reactive(){
    console.log(this.formone.value);
    console.log(this.formone.value['email']);
     
  }
}
