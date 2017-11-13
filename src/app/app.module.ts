import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupTimetableComponent } from './timetable-module/group-timetable/group-timetable.component';
import { WeekdayTimetableComponent } from './timetable-module/weekday-timetable/weekday-timetable.component';
import { WeekdayListComponent } from './timetable-module/weekday-list/weekday-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { LessonComponent } from './timetable-module/lesson/lesson.component';
import {HttpModule} from '@angular/http';
import {LessonService} from './service/lesson-service';
import {GroupService} from './service/group-service';
import {SubjectService} from './service/subject-service';
import {RoomService} from './service/room-service';
import { LessonDetailComponent } from './timetable-module/lesson-detail/lesson-detail.component';
import {TeacherService} from './service/teacher-service';
import { AdminComponent } from './admin-module/admin/admin.component';
import {GroupListComponent} from './journal-module/drop-down-list/group-list/group-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTeacherComponent } from './admin-module/add/add-teacher/add-teacher.component';
import { AddSubjectComponent } from './admin-module/add/add-subject/add-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupTimetableComponent,
    WeekdayTimetableComponent,
    WeekdayListComponent,
    LessonComponent,
    LessonDetailComponent,
    AdminComponent,
    GroupListComponent,
    MainPageComponent,
    AddTeacherComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LessonService, GroupService, SubjectService, RoomService, TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
