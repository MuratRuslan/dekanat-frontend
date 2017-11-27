import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeekdayListComponent} from './timetable-module/weekday-list/weekday-list.component';
import {WeekdayTimetableComponent} from './timetable-module/weekday-timetable/weekday-timetable.component';
import {LessonComponent} from './timetable-module/lesson/lesson.component';
import {AdminComponent} from './admin-module/admin/admin.component';
import {MainPageComponent} from './main-page/main-page.component';
import {GroupListComponent} from './journal-module/group/group-list/group-list.component';
import {AddTeacherComponent} from './admin-module/add/add-teacher/add-teacher.component';
import {AddStudentComponent} from './admin-module/add/add-student/add-student.component';
import {AddSubjectComponent} from './admin-module/add/add-subject/add-subject.component';
import {AddRoomComponent} from './admin-module/add/add-room/add-room.component';
import {AddGroupComponent} from './admin-module/add/add-group/add-group.component';
import {AddSemesterComponent} from './admin-module/add/add-semester/add-semester.component';
import {GroupInfoComponent} from "./journal-module/group/group-info/group-info.component";
import {EditStudentComponent} from "./admin-module/edit/edit-student/edit-student.component";


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'timetable', component: WeekdayListComponent},
  {path: 'timetable/detail/:day', component: WeekdayTimetableComponent},
  {path: 'timetable/lesson/:id/:time/:weekday', component: LessonComponent},
  {path: 'journal', component: GroupListComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add/teacher', component: AddTeacherComponent},
  {path: 'add/student', component: AddStudentComponent},
  {path: 'add/subject', component: AddSubjectComponent},
  {path: 'add/group', component: AddGroupComponent},
  {path: 'add/semester', component: AddSemesterComponent},
  {path: 'add/room', component: AddRoomComponent},
  {path: 'group/:id', component: GroupInfoComponent},
  {path: 'edit/student', component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
