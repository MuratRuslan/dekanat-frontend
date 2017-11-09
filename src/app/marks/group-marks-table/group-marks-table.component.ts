import {Component, OnInit} from '@angular/core';
import {Gruppa, Mark, Student, Subject} from '../../shared/para';

@Component({
  selector: 'app-group-marks-table',
  templateUrl: './group-marks-table.component.html',
  styleUrls: ['./group-marks-table.component.css']
})
export class GroupMarksTableComponent implements OnInit {

  group: Gruppa;
  subjects: Subject[] = [];
  semester = 'Semester 1';

  constructor() {
    this.group = new Gruppa();
    const s: Student = new Student();
    s.name = 'temirlan';
    s.surname = 'renatov';
    this.group.students.push(s);

    const subject = new Subject();
    subject.id = 1;
    subject.name = 'Math';
    this.subjects.push(subject);

    const mark = new Mark();
    mark.subject = subject;
    mark.mark = 5.0;
    s.marks.push(mark);
  }

  getMarkBySubject(student: Student, subject: Subject) {
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id) {
        return mark.mark;
      }
    }
    return 'No mark was given';
  }

  ngOnInit() {
  }
}
