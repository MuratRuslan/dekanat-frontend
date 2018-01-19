import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LessonService} from './service/lesson-service';
import {GroupService} from './service/group-service';
import {SubjectService} from './service/subject-service';
import {RoomService} from './service/room-service';
import {TeacherService} from './service/teacher-service';
import {MainPageComponent} from './main-page/main-page.component';
import {StudentService} from './service/student-service';
import {SemesterService} from './service/semester-service';
import {LoginComponent} from './login/login.component';
import {UserService} from './service/user-service';
import {AuthenticationService} from './service/authentication-service';
import {AuthGuard} from './guards/auth.guard';
import {MarkService} from './service/mark-service';
import {AdminModule} from './admin-module/admin.module';
import {JournalModule} from './journal-module/journal.module';
import {TimetableModule} from './timetable-module/timetable.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AdminModule,
    JournalModule,
    TimetableModule
  ],
  providers: [LessonService, GroupService, SubjectService, RoomService, MarkService,
    TeacherService, StudentService, SemesterService, UserService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
