import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


import { ViewsumComponent } from './viewsum/viewsum.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {
  constructor(private dialogRef : MatDialog) { }
  ngOnInit(): void { }

onViewClick() { this.dialogRef.open(ViewsumComponent, {});
}

}
