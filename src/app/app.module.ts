import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupTimetableComponent } from './group-timetable/group-timetable.component';
import { WeekdayTimetableComponent } from './weekday-timetable/weekday-timetable.component';
import { WeekdayListComponent } from './weekday-list/weekday-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { LessonComponent } from './lesson/lesson.component';
import {HttpModule} from '@angular/http';
import {LessonService} from './service/lesson-service';
import {GroupService} from './service/group-service';
import {SubjectService} from './service/subject-service';
import {RoomService} from "./service/room-service";

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupTimetableComponent,
    WeekdayTimetableComponent,
    WeekdayListComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LessonService, GroupService, SubjectService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
