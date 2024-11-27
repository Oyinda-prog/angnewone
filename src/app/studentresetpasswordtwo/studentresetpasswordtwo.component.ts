import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentresetpasswordtwo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './studentresetpasswordtwo.component.html',
  styleUrl: './studentresetpasswordtwo.component.css'
})
export class StudentresetpasswordtwoComponent {
  constructor(public router:Router){}
  studentarray:any=[]
  passwordone=''
  passwordtwo=''
  msg=''
  studentresetindex=''
  ngOnInit(){
    this.studentarray=JSON.parse(localStorage.getItem('studentarray') || '[]')
 this.studentresetindex=JSON.parse(localStorage.getItem('studentresetindex')!)
    }
    checkpassword(){
      if(this.passwordone==this.passwordtwo){
     this.studentarray[this.studentresetindex].password=this.passwordtwo
     localStorage.setItem('studentarray',JSON.stringify(this.studentarray)) 
     this.msg='Password Successfully Updated' 
     if(this.msg=='Password Successfully Updated'){
this.router.navigate(['/studentsignin'])
     }
     
      }
      else{
        this.msg='Password do not match'
      }
    }
}
