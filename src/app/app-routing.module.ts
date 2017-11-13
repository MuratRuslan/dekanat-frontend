import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeekdayListComponent} from './timetable-module/weekday-list/weekday-list.component';
import {WeekdayTimetableComponent} from './timetable-module/weekday-timetable/weekday-timetable.component';
import {LessonComponent} from './timetable-module/lesson/lesson.component';
import {AdminComponent} from './admin-module/admin/admin.component';
import {GroupListComponent} from './journal-module/drop-down-list/group-list/group-list.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AddTeacherComponent} from './admin-module/add/add-teacher/add-teacher.component';
import {AddSubjectComponent} from './admin-module/add/add-subject/add-subject.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'timetable', component: WeekdayListComponent},
  {path: 'timetable/detail/:day', component: WeekdayTimetableComponent},
  {path: 'timetable/lesson/:id/:time/:weekday', component: LessonComponent},
  {path: 'journal', component: GroupListComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'add/teacher', component: AddTeacherComponent},
  {path: 'add/subject', component: AddSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
