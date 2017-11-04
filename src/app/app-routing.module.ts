import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeekdayListComponent} from './weekday-list/weekday-list.component';
import {WeekdayTimetableComponent} from './weekday-timetable/weekday-timetable.component';

const routes: Routes = [
  { path: 'main',  component: WeekdayListComponent },
{ path: 'detail/:day', component: WeekdayTimetableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
