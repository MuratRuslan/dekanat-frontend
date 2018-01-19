import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {MarkEditComponent} from './mark-edit/mark-edit.component';
import {SemesterSelectComponent} from './semester-select/semester-select.component';
import {StudentInfoComponent} from './student/student-info/student-info.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import {TipsComponent} from './tips/tips.component';
import {GroupMarkAveragePipe} from './pipe/group-mark-average.pipe';
import {StudentMarkAveragePipe} from './pipe/student-mark-average.pipe';
import {journalRoutings} from './journal.routing';
import {GroupInfoComponent} from './group/group-info/group-info.component';
import {GroupListComponent} from "./group/group-list/group-list.component";



@NgModule({
  imports: [
    journalRoutings,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    MarkEditComponent,
    SemesterSelectComponent,
    StudentInfoComponent,
    StudentListComponent,
    TipsComponent,
    GroupMarkAveragePipe,
    StudentMarkAveragePipe,
    GroupInfoComponent,
    GroupListComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class JournalModule {}
