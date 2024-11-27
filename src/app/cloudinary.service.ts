
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  public cloudName = 'dsk0vcgd7'
  public uploadPreset ='honeywealth_preset';
  public cloudinaryUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}/video/upload`;
  constructor(private http: HttpClient) {}

  // uploadVideo(file: File): Observable<any> {
  //   const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/video/upload`;

  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', this.uploadPreset);

  //   return this.http.post(url, formData);
  // }


  uploadVideo(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset); 
    
  
    console.log('Uploading file to Cloudinary...');
    return this.http.post(this.cloudinaryUrl, formData).pipe(
      tap(() => console.log('File sent to Cloudinary')),
      catchError((error) => {
        console.error('Cloudinary upload error:', error);
        return throwError(error);
      })
    );
  }
  
}
