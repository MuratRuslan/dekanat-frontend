import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {WeekdayListComponent} from './weekday-list/weekday-list.component';
import {WeekdayTimetableComponent} from './weekday-timetable/weekday-timetable.component';
import {LessonComponent} from './lesson/lesson.component';
import {AuthGuard} from '../guards/auth.guard';

const timetableRoutes: Routes = [
  {path: 'timetable', component: WeekdayListComponent},
  {path: 'timetable/detail/:day', component: WeekdayTimetableComponent},
  {path: 'timetable/lesson/:id/:time/:weekday', component: LessonComponent, canActivate: [AuthGuard]},
];
export const timetableRoutings: ModuleWithProviders = RouterModule.forChild(timetableRoutes);
