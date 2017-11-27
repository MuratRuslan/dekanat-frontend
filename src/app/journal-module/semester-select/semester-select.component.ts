import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SemesterService} from '../../service/semester-service';
import {Semester} from '../../shared/model/SemesterModel';

@Component({
  selector: 'app-semester-select',
  templateUrl: './semester-select.component.html',
  styleUrls: ['./semester-select.component.css']
})
export class SemesterSelectComponent implements OnInit {

   semesters: Semester[] = [];

  @Output() semesterEvent = new EventEmitter<Semester>();

  constructor(private semesterService: SemesterService) {
  }

  onSemesterSelectionChange(semesterId: number) {
    this.semesterEvent.emit(this.semesterService.getSemesterInAnArrayById(this.semesters, +semesterId));
  }

  ngOnInit() {
    const sem2 = new Semester();
    sem2.name = 'ЛЕТНИЙ';
    sem2.id = 2;
    sem2.year = new Date('2017');
    const semester = new Semester();
    semester.id = 1;
    semester.name = 'ЗИМНИЙ';
    semester.year = new Date('01 01 2017');
    this.semesters.push(sem2);
    this.semesters.push(semester);
  }


}
