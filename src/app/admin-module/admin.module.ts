import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AddGroupComponent} from './add/add-group/add-group.component';
import {AddSemesterComponent} from './add/add-semester/add-semester.component';
import {AddStudentComponent} from './add/add-student/add-student.component';
import {AddTeacherComponent} from './add/add-teacher/add-teacher.component';
import {AddRoomComponent} from './add/add-room/add-room.component';
import {AddUserComponent} from './add/add-user/add-user.component';
import {AddSubjectComponent} from './add/add-subject/add-subject.component';
import {EditSubjectComponent} from './edit/edit-subject/edit-subject.component';
import {EditGroupComponent} from './edit/edit-group/edit-group.component';
import {EditSemesterComponent} from './edit/edit-semester/edit-semester.component';
import {EditStudentComponent} from './edit/edit-student/edit-student.component';
import {EditTeacherComponent} from './edit/edit-teacher/edit-teacher.component';
import {EditRoomComponent} from './edit/edit-room/edit-room.component';
import {adminRoutings} from './admin.routing';
import {AdminComponent} from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    adminRoutings,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    AdminComponent,
    AddGroupComponent,
    AddSemesterComponent,
    AddStudentComponent,
    AddTeacherComponent,
    AddRoomComponent,
    AddUserComponent,
    AddSubjectComponent,

    EditSubjectComponent,
    EditGroupComponent,
    EditSemesterComponent,
    EditStudentComponent,
    EditTeacherComponent,
    EditRoomComponent,
    EditSubjectComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule {}
