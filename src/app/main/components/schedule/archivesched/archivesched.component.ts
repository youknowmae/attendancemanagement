import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivesched',
  templateUrl: './archivesched.component.html',
  styleUrl: './archivesched.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ArchiveschedComponent {
  constructor(private router: Router, private ref: MatDialogRef<ArchiveschedComponent>, private buildr: FormBuilder,) {}
  
  closepopup() {
    this.ref.close('Closed using function');
  }
  archiveBox(){
    this.ref.close('Closed using function');
    Swal.fire({
      title: "Delete Schedule",
      text: "Are you sure want to Delete this schedule?",
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
          text: "Schedule has been safely deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    });
}
}
