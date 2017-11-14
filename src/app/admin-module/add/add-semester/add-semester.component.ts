import {Component, OnInit} from '@angular/core';
import {Semester} from '../../../shared/model/SemesterModel';
import {SemesterService} from '../../../service/semester-service';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent implements OnInit {
  semester: Semester;
  options = ['ЗИМНИЙ', 'ЛЕТНИЙ'];
  startYear = new Date('01 01 2001');
  currentYear = new Date();
  years: Date[];

  constructor(private semesterService: SemesterService) {
  }

  ngOnInit() {
    this.semester = new Semester();
    this.semester.name = this.options[0];
    this.years = this.getArrayOfYears();
    this.semester.year = this.years[this.years.length - 1];
  }

  save(): void {
    this.semesterService.add(this.semester).then(res => {
      alert(res);
    });
  }

  getArrayOfYears(): Date[] {
    const arr: Date[] = [];
    for (const year = this.startYear; year <= this.currentYear; year.setFullYear(year.getFullYear() + 1)) {
      arr.push(new Date(year));
    }
    return arr;
  }
}
