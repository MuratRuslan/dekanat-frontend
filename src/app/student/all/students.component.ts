import {Component, OnInit} from '@angular/core';
import {Student} from '../../shared/para';
import {StudentService} from '../../service/student-service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) {
    this.students = studentService.findAll();
  }

  ngOnInit() {
  }

}
