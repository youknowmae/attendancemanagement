import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { 
    path: 'main', 
    component: MainComponent,
    children: [{
      path: '',
      loadChildren: ()=>import('./main/main.module').then((m)=>m.MainModule)
    }]
  },
  { path: 'schedule', loadChildren: () => import('./main/components/schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'attendance', loadChildren: () => import('./main/components/attendance/attendance.module').then(m => m.AttendanceModule) },
  { path: 'summary', loadChildren: () => import('./main/components/summary/summary.module').then(m => m.SummaryModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
