import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Teacher} from '../../../shared/model/TeacherModel';
import {TeacherService} from '../../../service/teacher-service';
import {isUndefined} from "util";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  @Input() teacher: Teacher;

  constructor(private teacherService: TeacherService) {
    this.teacher = new Teacher();
  }

  ngOnInit() {
  }

  addTeacher(teacher: Teacher): void {
    this.teacherService.add(teacher).then(res => {
      alert('Успешно добавлен!');
      if (isUndefined(this.teacher.id)) {
        this.teacher = new Teacher();
      }
    });
  }
}
