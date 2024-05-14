import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ArchiveComponent } from './archive/archive.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent  implements OnInit {
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.dialogRef.open(AdduserComponent, {});
  }
onArchiveBtnClick() {
  this.dialogRef.open(ArchiveComponent, {});
}
onEditBtnClick() {
  this.dialogRef.open(EdituserComponent, {});
}


}
