import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CloudinaryService } from '../cloudinary.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-adminresourses',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminresourses.component.html',
  styleUrl: './adminresourses.component.css'
})
export class AdminresoursesComponent {
public studentarray:any=[]
  msg=''
  currentstudent:any
  image:any
  adminindex:number=0
  img:any
  adminarray:any=[]
  department=''
  uploadsarray:any=[]
  base64String: string | undefined
  videoUrl: string | undefined;
  public createdat=new Date().toLocaleDateString()
  alluploads:any=[]

  ngOnInit(){
    this.alluploads=JSON.parse(localStorage.getItem('alluploads') || '[]')
    this.uploadsarray=JSON.parse(localStorage.getItem('uploadsarray') || '[]')
    this.currentstudent=JSON.parse(localStorage.getItem('currentstudent') || '[]')
    this.studentarray=JSON.parse(localStorage.getItem('studentarray')|| '[]')
    this.adminarray=JSON.parse(localStorage.getItem('adminarray') || '[]')
    this.adminindex=JSON.parse(localStorage.getItem('adminindex') || '[]')
  } 
  
  
    constructor(private cloudinaryService: CloudinaryService) {}

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    console.log(file);

    const observer: Observer<any> = {
      next: (response) => {
        this.msg='Upload successful'
        this.videoUrl = response['secure_url']; 
        this.sendvideo()
        // console.log(this.videoUrl);
        // console.log(localStorage['alluploads']);
        
          
        
        
      },
      error: (error) => {
        this.msg='Upload failed:'
      },
      complete: () => {
        this.msg='Upload process completed';
      }
    };

    this.cloudinaryService.uploadVideo(file).subscribe(observer);
  }
}
  sendvideo(){
    this.msg='Loading.................'
if(this.videoUrl){
  let obj={
    adminnumber:this.adminarray[this.adminindex].adminnumber,
    coursetitle:this.department,
    date:this.createdat,
    video:this.videoUrl
  }
  this.alluploads.push(obj)
  localStorage.setItem('alluploads',JSON.stringify(this.alluploads))
  console.log(localStorage['alluploads']);
  
    
}
  }





















  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;

  //   if (input.files && input.files.length > 0) {
  //     const file = input.files[0];
  //     const reader = new FileReader();

  //     // Read the file as a data URL
  //     reader.readAsDataURL(file);

  //     // Handle the load event
  //     reader.onload = () => {
  //       if (reader.result) {
  //         this.base64String = reader.result.toString();
  //         localStorage.setItem('video',JSON.stringify(this.base64String));
  //         console.log(this.base64String);
  //         console.log(localStorage['video']);
  //          // Output the Base64 string
  //       }
  //     };

  //     // Handle errors
  //     reader.onerror = (error) => {
  //       console.error('Error reading file:', error);
  //     };
  //   }
  // }

  
  
//   upload(){
//     if(this.image==null){
//       this.msg='Please select image';
      
//     }
//     else{
//       console.log(this.image);
      
//      let obj= {
//    adminnumber:this.adminarray[this.adminindex].adminnumber,
//    coursetitle:this.department,
//    createdat:this.createdat,
//    video:this.image
//       }
      
//       this.uploadsarray.push(obj)
//       console.log(this.uploadsarray);
//   localStorage.setItem('uploadsarray',JSON.stringify(this.uploadsarray))
//   console.log(this.uploadsarray);
      
//     }

// }
// }

   
  
  
   
   

// let img=event.target.files[0]
//    if(img){
//      let convertimg=new FileReader();
     
//      convertimg.onload=()=>{
//        this.image=convertimg.result
//        // console.log(this.image);
       
//      }
//      convertimg.readAsDataURL(img)
//    }
}