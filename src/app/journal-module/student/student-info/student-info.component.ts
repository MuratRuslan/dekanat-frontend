import {Component, OnInit} from '@angular/core';
import {Student} from '../../../shared/model/StudentModel';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  student: Student = new Student();

  constructor() {
  }

  ngOnInit() {
  }

}
