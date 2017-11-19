import {Component, Input, OnInit} from '@angular/core';
import {Mark} from '../../shared/model/MarkModel';
import {isNull, isUndefined} from 'util';

@Component({
  selector: 'app-mark-edit',
  templateUrl: './mark-edit.component.html',
  styleUrls: ['./mark-edit.component.css']
})
export class MarkEditComponent implements OnInit {

  @Input() mark: Mark;
  maxExamFails = 3;
  maxExamFailsArray: number[] = [];
  availableMarks: any[] = [];
  minMarkToPassExam = 2.6;

  constructor() {
    if (isNull(this.mark) || isUndefined(this.mark)) {
      this.mark = new Mark();
    }
  }

  onMarkChange(mark, index) {
    if (mark >= this.minMarkToPassExam) {
      this.mark.marks.length = index;
    }
    this.mark.marks[index] = mark;
    console.log('size :' + this.mark.marks.length)
    for (let i = 0; i < this.mark.marks.length; i++) {
      console.log(this.mark.marks[i]);
    }
  }

  ngOnInit() {
    if (this.mark.marks.length <= 0) {
      this.mark.marks.push(2);
    }
    for (let i = 1; i < this.maxExamFails; i++) {
      this.maxExamFailsArray.push(i);
    }
    for (let i = 2; i <= 5; i++) {
      this.availableMarks.push(i);
    }
  }

}
