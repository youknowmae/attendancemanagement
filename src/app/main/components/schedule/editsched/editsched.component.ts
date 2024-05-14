import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editsched',
  templateUrl: './editsched.component.html',
  styleUrl: './editsched.component.scss'
})
export class EditschedComponent {
  constructor(private router: Router, private ref: MatDialogRef<EditschedComponent>, private buildr: FormBuilder,) {}
 
  addBox() {
    throw new Error('Method not implemented.');
    }
  closepopup() {
    this.ref.close('Closed using function');
}

}