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
import {GroupInfoComponent} from './journal-module/group/group-info/group-info.component';
import {EditStudentComponent} from './admin-module/edit/edit-student/edit-student.component';
import {EditTeacherComponent} from './admin-module/edit/edit-teacher/edit-teacher.component';
import {EditRoomComponent} from './admin-module/edit/edit-room/edit-room.component';
import {EditGroupComponent} from './admin-module/edit/edit-group/edit-group.component';
import {EditSubjectComponent} from './admin-module/edit/edit-subject/edit-subject.component';
import {EditSemesterComponent} from './admin-module/edit/edit-semester/edit-semester.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'timetable', component: WeekdayListComponent},
  {path: 'timetable/detail/:day', component: WeekdayTimetableComponent},
  {path: 'timetable/lesson/:id/:time/:weekday', component: LessonComponent},
  {path: 'journal', component: GroupListComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/teacher', component: AddTeacherComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/student', component: AddStudentComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/subject', component: AddSubjectComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/group', component: AddGroupComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/semester', component: AddSemesterComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/room', component: AddRoomComponent, canActivate: [AuthGuard]},
  {path: 'group/:id', component: GroupInfoComponent},
  {path: 'admin/edit/student', component: EditStudentComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/teacher', component: EditTeacherComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/room', component: EditRoomComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/group', component: EditGroupComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/subject', component: EditSubjectComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/semester', component: EditSemesterComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
