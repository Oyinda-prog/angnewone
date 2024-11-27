import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-adminreceiptpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminreceiptpage.component.html',
  styleUrl: './adminreceiptpage.component.css'
})
export class AdminreceiptpageComponent {
  public receiptarray:any=[]
  currentstudent:any
  studentarray:any[]=[]
  index=0
  allreceipts:any=[]
  eacharray:any=[]
newarray:any=[]
i:number=0
ngOnInit(){
this.receiptarray=JSON.parse(localStorage.getItem('receiptarray')!)
this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
this.index=JSON.parse(localStorage.getItem('studentindex')!)
// console.log(localStorage['receiptarray']);


}
approve(index:number){

let obj:any=this.studentarray.find((student:any)=>student.registrationnumber==this.receiptarray[index].registrationnumber)
// console.log(obj);

this.allreceipts=obj.receipt
let newobj=this.allreceipts.find((receipt:any)=>receipt.uniqueid==this.receiptarray[index].uniqueid)
newobj.status='Approved'
this.receiptarray[index].status='Approved'
// this.receiptarray[index].amount=this
localStorage.setItem('receiptarray',JSON.stringify(this.receiptarray))
localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
console.log(newobj.status);
console.log(localStorage['studentarray']);
}

}
