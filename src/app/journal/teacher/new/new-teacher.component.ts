import {Component, Input, OnInit} from '@angular/core';
import {TeacherService} from '../../../service/teacher-service';
import {Teacher} from '../../../shared/para';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {

  teacher = new Teacher();

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit() {
  }

  addTeacher() {
    this.teacherService.add(this.teacher);
  }
}
