import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {GroupListComponent} from './drop-down-list/group-list/group-list.component';
import {GroupTimetableComponent} from './group-timetable/group-timetable.component';
import {WeekdayTimetableComponent} from './weekday-timetable/weekday-timetable.component';
import {WeekdayListComponent} from './weekday-list/weekday-list.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {LessonComponent} from './lesson/lesson.component';
import {HttpClientModule} from '@angular/common/http';
import {TeachersListComponent} from './drop-down-list/teachers-list/teachers-list.component';
import {TeacherService} from './service/teacher-service';
import {NewTeacherComponent} from './teacher/new/new-teacher.component';
import {NewStudentComponent} from './student/new/new-student.component';
import {GroupMarksTableComponent} from './marks/group-marks-table/group-marks-table.component';
import {StudentMarksTableComponent} from './marks/student-marks-table/student-marks-table.component';
import {HeaderComponent} from './header/header.component';
import {NewGroupComponent} from './group/new/new-group.component';
import {GroupService} from './service/group-service';
import {Router, RouterModule, Routes} from '@angular/router';
import { TeachersComponent } from './teacher/all/teachers.component';
import { GroupsComponent } from './group/all/groups.component';
import { StudentsComponent } from './student/all/students.component';


const appRoutes: Routes = [{
  path: '', component: AppComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupTimetableComponent,
    WeekdayTimetableComponent,
    WeekdayListComponent,
    LessonComponent,
    TeachersListComponent,
    NewTeacherComponent,
    HeaderComponent,
    NewStudentComponent,
    GroupMarksTableComponent,
    StudentMarksTableComponent,
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
