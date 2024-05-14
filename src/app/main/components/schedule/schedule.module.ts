import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { AddschedComponent } from './addsched/addsched.component';
import { EditschedComponent } from './editsched/editsched.component';



@NgModule({
  declarations: [

  
    AddschedComponent,
         EditschedComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
