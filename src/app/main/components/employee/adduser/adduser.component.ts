import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent {
  constructor(private router: Router, private ref: MatDialogRef<AdduserComponent>, private buildr: FormBuilder,) {}
  addBox() {
    throw new Error('Method not implemented.');
    }
  closepopup() {
    this.ref.close('Closed using function');
  }


}
