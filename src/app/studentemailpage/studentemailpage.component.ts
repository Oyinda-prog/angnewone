import { Component } from '@angular/core';
declare let Email: any; // SMTPJS library
@Component({
  selector: 'app-studentemailpage',
  standalone: true,
  imports: [],
  templateUrl: './studentemailpage.component.html',
  styleUrl: './studentemailpage.component.css'
})

export class StudentemailpageComponent {
  sendemail() {
    Email.send({
      Host: 'smtp.gmail.com',
      Username: 'oyindamola2383@gmail.com',
      Password: 'zqqp djqh czcf nhsa',
      To: 'pappedward7@gmail.com',
      From: 'oyindamola2383@gmail.com',
      Subject: 'Test Email',
      Body: 'Hello from Angular and SMTPJS!',
    })
      .then((message: any) => console.log('Email sent successfully!', message))
      .catch((error: any) => console.error('Error sending email', error));
  }
}


