import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childeone',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './childeone.component.html',
  styleUrl: './childeone.component.css'
})
export class ChildeoneComponent {
@Input() msgtochild=''
msgfromchild=''
@Output() public eventemit=new EventEmitter
send(){
  console.log(this.msgfromchild);
  
this.eventemit.emit(this.msgfromchild)
}
}
