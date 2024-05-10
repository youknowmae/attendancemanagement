import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    ScheduleComponent,
    AttendanceComponent,
    SummaryComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
