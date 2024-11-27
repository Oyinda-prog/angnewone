import { Component } from '@angular/core';
import { ChildbehaviorsubComponent } from '../childbehaviorsub/childbehaviorsub.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviorsubjectService } from '../services/behaviorsubject.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-parentbehaviorsub',
  standalone: true,
  imports: [ChildbehaviorsubComponent,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './parentbehaviorsub.component.html',
  styleUrl: './parentbehaviorsub.component.css'
})
export class ParentbehaviorsubComponent {
public msg=''
public data=''

constructor(public behaviorsub:BehaviorsubjectService){}

upd(){
  console.log(this.msg);
  this.behaviorsub.behavior.next(this.msg)
}
ngOnInit(){
  this.behaviorsub.behavior.subscribe(data=>{
    console.log(data);
    this.data=data
  })
}
}
