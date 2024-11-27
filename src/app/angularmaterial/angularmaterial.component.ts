import { Component } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-angularmaterial',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule, MatFormFieldModule,MatInputModule],
  templateUrl: './angularmaterial.component.html',
  styleUrl: './angularmaterial.component.css'
})
export class AngularmaterialComponent {
  constructor(private _snackbar:MatSnackBar){}

  openSnackBar(message: string, action: string) {
    this._snackbar.open(message, action);
  }
}
