import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editsched',
  templateUrl: './editsched.component.html',
  styleUrl: './editsched.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class EditschedComponent {
  constructor(private router: Router, private ref: MatDialogRef<EditschedComponent>, private buildr: FormBuilder,) {}
 

  closepopup() {
    this.ref.close('Closed using function');
}

 // SWEETALERT UPDATE POPUP
 addBox(){
  Swal.fire({
    title: "Edit Changes",
    text: "Are you sure you want to save changes?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
    confirmButtonColor: "#31A463",
    cancelButtonColor: "#777777",
  }).then((result) => {
    if (result.isConfirmed) {
      this.ref.close('Closed using function');
      Swal.fire({
        title: "Change successful!",
        text: "The changes have been saved.",
        icon: "success",
        confirmButtonText: 'Close',
        confirmButtonColor: "#777777",
      });
    }
  });
}
}