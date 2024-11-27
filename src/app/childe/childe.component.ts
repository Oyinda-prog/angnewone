import { Component } from '@angular/core';
import { ChildeoneComponent } from '../childeone/childeone.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childe',
  standalone: true,
  imports: [ChildeoneComponent, FormsModule],
  templateUrl: './childe.component.html',
  styleUrl: './childe.component.css'
})
export class ChildeComponent {
msgparent=''
data=''
recievemsg(data:any){
console.log(data);
this.data=data
}
}
