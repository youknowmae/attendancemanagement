import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { AddschedComponent } from './addsched/addsched.component';
import { EditschedComponent } from './editsched/editsched.component';
import { ArchiveschedComponent } from './archivesched/archivesched.component';



@NgModule({
  declarations: [

  
    AddschedComponent,
         EditschedComponent,
         ArchiveschedComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
