import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from '../guards/auth.guard';
import {ModuleWithProviders} from '@angular/core';
import {AddTeacherComponent} from './add/add-teacher/add-teacher.component';
import {AddStudentComponent} from './add/add-student/add-student.component';
import {AddSubjectComponent} from './add/add-subject/add-subject.component';
import {AddGroupComponent} from './add/add-group/add-group.component';
import {AddUserComponent} from './add/add-user/add-user.component';
import {AddSemesterComponent} from './add/add-semester/add-semester.component';
import {AddRoomComponent} from './add/add-room/add-room.component';
import {EditSemesterComponent} from './edit/edit-semester/edit-semester.component';
import {EditSubjectComponent} from './edit/edit-subject/edit-subject.component';
import {EditGroupComponent} from './edit/edit-group/edit-group.component';
import {EditRoomComponent} from './edit/edit-room/edit-room.component';
import {EditTeacherComponent} from './edit/edit-teacher/edit-teacher.component';
import {EditStudentComponent} from './edit/edit-student/edit-student.component';

const adminRoutes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/teacher', component: AddTeacherComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/student', component: AddStudentComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/subject', component: AddSubjectComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/group', component: AddGroupComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/user', component: AddUserComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/semester', component: AddSemesterComponent, canActivate: [AuthGuard]},
  {path: 'admin/add/room', component: AddRoomComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/student', component: EditStudentComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/teacher', component: EditTeacherComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/room', component: EditRoomComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/group', component: EditGroupComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/subject', component: EditSubjectComponent, canActivate: [AuthGuard]},
  {path: 'admin/edit/semester', component: EditSemesterComponent, canActivate: [AuthGuard]},
];
export const adminRoutings: ModuleWithProviders = RouterModule.forChild(adminRoutes);
