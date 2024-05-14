import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ArchiveComponent {
  constructor(private router: Router, private ref: MatDialogRef<ArchiveComponent>, private buildr: FormBuilder,) {}
  
  closepopup() {
    this.ref.close('Closed using function');
  }
  archiveBox(){
    this.ref.close('Closed using function');
    Swal.fire({
      title: "Delete User",
      text: "Are you sure want to Delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.ref.close('Closed using function');
        Swal.fire({
          title: "Delete complete!",
          text: "User has been safely deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    });
}
}
