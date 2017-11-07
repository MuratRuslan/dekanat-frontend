import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupListComponent } from './drop-down-list/group-list/group-list.component';
import { GroupTimetableComponent } from './group-timetable/group-timetable.component';
import { WeekdayTimetableComponent } from './weekday-timetable/weekday-timetable.component';
import { WeekdayListComponent } from './weekday-list/weekday-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { LessonComponent } from './lesson/lesson.component';
import { HttpClientModule } from '@angular/common/http';
import { TeachersListComponent } from './drop-down-list/teachers-list/teachers-list.component';
import {TeacherService} from './service/teacher-service';
import { AddTeacherComponent } from './add-new/add-teacher/add-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupTimetableComponent,
    WeekdayTimetableComponent,
    WeekdayListComponent,
    LessonComponent,
    TeachersListComponent,
    AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
