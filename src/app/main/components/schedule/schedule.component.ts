import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddschedComponent } from './addsched/addsched.component';
import { EditschedComponent } from './editsched/editsched.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.dialogRef.open(AddschedComponent, {});
  }
onArchiveBtnClick() {
throw new Error('Method not implemented.');
}
onEditBtnClick() {
  this.dialogRef.open(EditschedComponent, {});
}

}
