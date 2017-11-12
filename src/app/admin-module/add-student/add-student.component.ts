import {Component, OnInit} from '@angular/core';
import {Student} from '../../shared/model/StudentModel';
import {StudentService} from '../../service/student-service';
import {GroupService} from '../../service/group-service';
import {Gruppa} from '../../shared/model/GroupModel';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();
  groups: Gruppa[] = [];
  selectedGroup: Gruppa;

  constructor(private studentService: StudentService, private groupService: GroupService) {
/*
    groupService.getAll().then(grs => this.groups = grs);
*/
  }

  ngOnInit() {
    this.student.gruppa = this.selectedGroup;
    this.studentService.add(this.student).then(res => {
      if (res.ok) {
        alert('Успешно добавлен!');
      }
    });
  }

}
