import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-viewsum',
  templateUrl: './viewsum.component.html',
  styleUrl: './viewsum.component.scss'
})
export class ViewsumComponent {
  constructor(private router: Router, private ref: MatDialogRef<ViewsumComponent>, private buildr: FormBuilder,) {}
 


  closepopup() {
    this.ref.close('Closed using function');
}
}

