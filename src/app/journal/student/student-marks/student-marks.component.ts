import {Component, OnInit} from '@angular/core';
import {Student} from '../../../shared/para';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {

  student: Student;

  constructor() {
    this.student = new Student();
    this.student.name = 'RT';
    this.student.surname = 'Plus';
  }

  ngOnInit() {
  }

}
