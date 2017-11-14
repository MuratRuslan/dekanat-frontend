import {Component, OnInit} from '@angular/core';
import {Student} from '../../../shared/model/StudentModel';
import {StudentService} from '../../../service/student-service';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();
  groups: Gruppa[] = [];

  constructor(private studentService: StudentService,
              private groupService: GroupService) {
  }

  ngOnInit() {
    this.groupService.getAll()
      .then( groups => this.groups = groups);
  }

  addStudent(): void {
    this.studentService.add(this.student).then(res => {
      alert(res);
    });
  }

}
