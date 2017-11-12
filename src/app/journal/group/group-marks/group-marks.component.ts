import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gruppa, Mark, Student, Subject} from '../../../shared/para';
import {ActivatedRoute, Params} from "@angular/router";
import {GroupService} from "../../../service/group-service";

@Component({
  selector: 'app-group-marks',
  templateUrl: './group-marks.component.html',
  styleUrls: ['./group-marks.component.css']
})
export class GroupMarksComponent implements OnInit, OnDestroy {

  group: Gruppa = new Gruppa();
  subjects: Subject[] = [];
  semester = 'Semester 1';

  constructor(private route: ActivatedRoute, private groupService: GroupService) {
    this.justTest();
    this.route.params.subscribe((queryParams: Params) => {
      this.group = this.groupService.findById(+queryParams['id']);
    });
  }

  justTest() {
    this.group.name = 'IG-1-15';
    const s: Student = new Student();
    s.name = 'temirlan';
    s.surname = 'renatov';
    this.group.students.push(s);

    const subject = new Subject();
    const sub = new Subject();
    sub.name = 'DataBase';
    subject.id = 1;
    subject.name = 'Math';
    this.subjects.push(subject);
    this.subjects.push(sub);

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

  ngOnDestroy(): void {
  }
}
