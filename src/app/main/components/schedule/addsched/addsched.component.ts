import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsched',
  templateUrl: './addsched.component.html',
  styleUrl: './addsched.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})

export class AddschedComponent {
  constructor(private router: Router, private ref: MatDialogRef<AddschedComponent>, private buildr: FormBuilder,) {}
 
  
  closepopup() {
    this.ref.close('Closed using function');
  }
 // SWEETALERT UPDATE POPUP
 addBox(){
  Swal.fire({
    title: "Add Schedule",
    text: "Are you sure you want to add new Schedule?",
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
        title: "Add successful!",
        text: "The changes have been saved.",
        icon: "success",
        confirmButtonText: 'Close',
        confirmButtonColor: "#777777",
      });
    }
  });
}
}
