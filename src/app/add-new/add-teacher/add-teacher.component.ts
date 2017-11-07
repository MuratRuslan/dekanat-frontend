import {Component, Input, OnInit} from '@angular/core';
import {TeacherService} from '../../service/teacher-service';
import {Teacher} from '../../shared/para';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacher = new Teacher();

  constructor(private teacherService: TeacherService) {
  }

  ngOnInit() {
  }

  onAddTeacherButtonClicked() {
    console.log(this.teacher.name)
    console.log(this.teacher.surname)
    console.log(this.teacher.middleName)
    this.teacherService.add(this.teacher);
  }

}
