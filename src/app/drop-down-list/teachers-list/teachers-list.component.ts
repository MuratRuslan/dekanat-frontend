import {Component, OnInit} from '@angular/core';
import {Teacher} from '../../shared/para';
import {TeacherService} from '../../service/teacher-service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  private _teachers: Teacher[];

  get teachers(): Teacher[] {
    return this._teachers;
  }

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit() {
    /*  this.teachers = new Array();
      const t = new Teacher();
      t.name = 'tima';
      t.surname = 'renatov';
      this.teachers.push(t);*/
    /*
        this.teachers = this.teacherService.getAll();
    */
  }
}
