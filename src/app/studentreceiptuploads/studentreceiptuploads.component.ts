import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-studentreceiptuploads',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './studentreceiptuploads.component.html',
  styleUrl: './studentreceiptuploads.component.css'
})
export class StudentreceiptuploadsComponent {
  studentarray:any=[]
  msg=''
  currentstudent:any
  receipt:any
  index:any
  img:any
  receiptarray:any[]=[]
  date=new Date().toLocaleDateString()
  time=new  Date().toLocaleTimeString()
  currentreceipt:any=[]

  ngOnInit(){
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent')!)
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')!)
    this.receiptarray=JSON.parse(localStorage.getItem('receiptarray')||'[]')
    this.index=JSON.parse(localStorage.getItem('studentindex')!)
    // console.log(this.studentarray[this.index].receipt);
    this.currentreceipt=this.studentarray[this.index].receipt
    console.log(this.currentreceipt);
    
    
  }

  fileselected(event:any){
   // console.log(event.target.files[0]);
   let img=event.target.files[0]
   if(img){
     let convertimg=new FileReader();
     
     convertimg.onload=()=>{
       this.receipt=convertimg.result
       // console.log(this.image);
       
     }
     convertimg.readAsDataURL(img)
   }
  }
  upload(){
    if(this.receipt==null){
      this.msg='Please select image';
      
    }
    else{
      // console.log(78);
      
      let studentreceipt={
        registrationnumber:this.studentarray[this.index].registrationnumber,
        date:this.date,
        time:this.time,
        receipt:this.receipt,
        status:'Unapproved',
        amount:null,
        uniqueid:Math.round(Math.random()*1000)+'receipt/'+ Math.round(Math.random()*4509000)
      }
      // console.log(studentreceipt);
      
      this.receiptarray.push(studentreceipt)
       this.studentarray[this.index].receipt.push(studentreceipt)
      //  console.log(this.studentarray);
       
       localStorage.setItem('studentarray',JSON.stringify(this.studentarray))
       localStorage.setItem('receiptarray',JSON.stringify(this.receiptarray))
       console.log(localStorage['studentarray']);
       
      
    }
   
   }
}
