import {Component, Input,OnInit,Output,EventEmitter} from '@angular/core';
import {Mark} from '../../shared/model/MarkModel';
import {isNull, isUndefined} from 'util';

@Component({
  selector: 'app-mark-edit',
  templateUrl: './mark-edit.component.html',
  styleUrls: ['./mark-edit.component.css']
})
export class MarkEditComponent implements OnInit {

  @Input() mark:Mark;
  @Input() maxExamFails = 3;
  @Input() minMarkToPassExam = 2.6;
  @Input() availableMarks:any[] = [];
  @Output()markChangeEvent = new EventEmitter();

  maxExamFailsArray:number[] = [];

  constructor() {
  }

  onMarkChange(mark, index) {
    if (isNaN(mark))
      return;
    if (mark >= this.minMarkToPassExam) {
      this.mark.marks.length = index;
    } else {
      if (!confirm("Are you sure?")) {
        return;
      }
    }
    this.mark.marks[index] = mark;
    this.markChangeEvent.emit();
  }


  isMarkEditable(index):boolean {
    const m = this.mark.marks[index];
    if (m < this.minMarkToPassExam) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    if (isNull(this.mark) || isUndefined(this.mark)) {
      this.mark = new Mark();
    }
    for (let i = 1; i < this.maxExamFails; i++) {
      this.maxExamFailsArray.push(i);
    }
    for (let i = 5; i >= 2; i = i - 0.1) {
      this.availableMarks.push(i.toFixed(1));
    }
  }

}
