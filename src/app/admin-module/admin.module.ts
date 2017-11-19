import {NgModule} from '@angular/core';
import {AddGroupComponent} from './add/add-group/add-group.component';
import {AddSemesterComponent} from './add/add-semester/add-semester.component';
import {AddRoomComponent} from './add/add-room/add-room.component';
import {AddStudentComponent} from './add/add-student/add-student.component';
import {AddSubjectComponent} from './add/add-subject/add-subject.component';
import {AddTeacherComponent} from './add/add-teacher/add-teacher.component';

@NgModule({
    declarations: [
      AddGroupComponent,
      AddSemesterComponent,
      AddRoomComponent,
      AddStudentComponent,
      AddSubjectComponent,
      AddTeacherComponent
    ]
  }
)
export class AdminModule {
}
