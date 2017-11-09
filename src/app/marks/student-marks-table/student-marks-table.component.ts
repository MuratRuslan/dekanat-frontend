import {Component, OnInit} from '@angular/core';
import {Student} from '../../shared/para';

@Component({
  selector: 'app-student-marks-table',
  templateUrl: './student-marks-table.component.html',
  styleUrls: ['./student-marks-table.component.css']
})
export class StudentMarksTableComponent implements OnInit {

  student: Student;

  constructor() {
    this.student = new Student();
    this.student.name = 'RT';
    this.student.surname = 'Plus';
  }

  ngOnInit() {
  }

}
