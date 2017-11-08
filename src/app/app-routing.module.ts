import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeekdayListComponent} from './weekday-list/weekday-list.component';
import {WeekdayTimetableComponent} from './weekday-timetable/weekday-timetable.component';
import {LessonComponent} from './lesson/lesson.component';

const routes: Routes = [
  { path: 'main',  component: WeekdayListComponent },
{ path: 'detail/:day', component: WeekdayTimetableComponent },
  {path: 'lesson/:id/:time/:weekday', component: LessonComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
