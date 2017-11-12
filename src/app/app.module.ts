import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {GroupTimetableComponent} from './timetable/group-timetable/group-timetable.component';
import {WeekdayTimetableComponent} from './timetable/weekday-timetable/weekday-timetable.component';
import {WeekdayListComponent} from './timetable/weekday-list/weekday-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {LessonComponent} from './timetable/lesson/lesson.component';
import {HttpClientModule} from '@angular/common/http';
import {TeacherService} from './service/teacher-service';
import {NewTeacherComponent} from './journal/teacher/new/new-teacher.component';
import {NewStudentComponent} from './journal/student/new/new-student.component';
import {GroupMarksComponent} from './journal/group/group-marks/group-marks.component';
import {StudentMarksComponent} from './journal/student/student-marks/student-marks.component';
import {NewGroupComponent} from './journal/group/new/new-group.component';
import {GroupService} from './service/group-service';
import {Router, RouterModule, Routes} from '@angular/router';
import {TeachersComponent} from './journal/teacher/teachers/teachers.component';
import {GroupsComponent} from './journal/group/groups/groups.component';
import {StudentsComponent} from './journal/student/students/students.component';


const appRoutes: Routes = [{
  path: '', component: AppComponent
}, {
  path: 'teachers', component: TeachersComponent, children: [{
    path: 'new', component: NewTeacherComponent}]
}
];

@NgModule({
  declarations: [
    AppComponent,
    GroupTimetableComponent,
    WeekdayTimetableComponent,
    WeekdayListComponent,
    LessonComponent,
    NewTeacherComponent,
    NewStudentComponent,
    GroupMarksComponent,
    StudentMarksComponent,
    NewGroupComponent,
    TeachersComponent,
    GroupsComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeacherService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
