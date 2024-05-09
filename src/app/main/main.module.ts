import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
