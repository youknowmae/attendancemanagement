import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-addsched',
  templateUrl: './addsched.component.html',
  styleUrl: './addsched.component.scss'
})
export class AddschedComponent {
  constructor(private router: Router, private ref: MatDialogRef<AddschedComponent>, private buildr: FormBuilder,) {}
 
  addBox() {
    throw new Error('Method not implemented.');
    }
  closepopup() {
    this.ref.close('Closed using function');
  }

}
