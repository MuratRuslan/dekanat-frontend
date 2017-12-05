import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SemesterService} from '../../service/semester-service';
import {Semester} from '../../shared/model/SemesterModel';

@Component({
  selector: 'app-semester-select',
  templateUrl: './semester-select.component.html',
  styleUrls: ['./semester-select.component.css']
})
export class SemesterSelectComponent implements OnInit {

  @Input() semesters: Semester[] = [];

  @Output() semesterEvent = new EventEmitter<Semester>();

  constructor(private semesterService: SemesterService) {
  }

  onSemesterSelectionChange(semesterId: number) {
    this.semesterEvent.emit(this.semesterService.getSemesterInAnArrayById(this.semesters, +semesterId));
  }

  ngOnInit() {

  }


}
