import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {timetableRoutings} from './timetable.routing';
import {GroupTimetableComponent} from './group-timetable/group-timetable.component';
import {LessonComponent} from './lesson/lesson.component';
import {LessonDetailComponent} from './lesson-detail/lesson-detail.component';
import {WeekdayListComponent} from './weekday-list/weekday-list.component';
import {WeekdayTimetableComponent} from './weekday-timetable/weekday-timetable.component';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    timetableRoutings,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule
  ],
  declarations: [
    GroupTimetableComponent,
    LessonComponent,
    LessonDetailComponent,
    WeekdayListComponent,
    WeekdayTimetableComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TimetableModule {}
