import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.scss'
})
export class EdituserComponent {
  constructor(private router: Router, private ref: MatDialogRef<EdituserComponent>, private buildr: FormBuilder,) {}
  
  addBox() {
    throw new Error('Method not implemented.');
    }
  closepopup() {
    this.ref.close('Closed using function');
  }

}
