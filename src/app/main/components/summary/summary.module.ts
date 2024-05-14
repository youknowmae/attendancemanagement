import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { ViewsumComponent } from './viewsum/viewsum.component';



@NgModule({
  declarations: [
  
    ViewsumComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
