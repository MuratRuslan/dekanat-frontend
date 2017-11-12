import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from '../../shared/model/TeacherModel';
import {TeacherService} from '../../service/teacher-service';

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
      if (res.ok) {
        alert('Успешно добавлен!');
        this.teacher = new Teacher();
      }});
  }
}
