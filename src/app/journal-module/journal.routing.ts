import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GroupListComponent} from './group/group-list/group-list.component';
import {AuthGuard} from '../guards/auth.guard';
import {GroupInfoComponent} from './group/group-info/group-info.component';
import {StudentInfoComponent} from './student/student-info/student-info.component';

const journalRoutes: Routes = [
  {path: 'journal', component: GroupListComponent, canActivate: [AuthGuard]},
  {path: 'journal/group/:id', component: GroupInfoComponent, canActivate: [AuthGuard]}
];
export const journalRoutings: ModuleWithProviders = RouterModule.forChild(journalRoutes);
