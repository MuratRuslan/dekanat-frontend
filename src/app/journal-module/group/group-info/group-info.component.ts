import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {Subject} from '../../../shared/model/SubjectModel';
import {Student} from '../../../shared/model/StudentModel';
import {Semester} from '../../../shared/model/SemesterModel';
import {Mark} from '../../../shared/model/MarkModel';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SubjectService} from '../../../service/subject-service';
import {SemesterService} from '../../../service/semester-service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit, OnDestroy {

  tempSubjects: Subject[] = [{id: 5, name: 'Database'},
    {id: 1, name: 'Algorithmen'}];
  group: Gruppa = new Gruppa();
  allSubjectsInDekanat: Subject[];
  subjects: Subject[] = [];
  students: Student[]= [];
  semesters: Semester[] = [];
  currentSemester: Semester;

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private subjectService: SubjectService,
              private semesterService: SemesterService) {
    this.test();
    this.currentSemester = this.semesters[0];
  }

  getMarkBySubject(student: Student, subject: Subject): any {
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === this.currentSemester.id) {
        return null;
      }
    }
    return 'оценка еще не указана';
  }

  test() {


    const semester = new Semester();
    semester.name = 'ЗИМНИЙ';
    semester.year = new Date('01 01 2017');

    const subject = new Subject();
    subject.name = 'Math';
    subject.id = 1;

    const mark = new Mark();
    mark.subject = subject;
    mark.semester = semester;

    const student = new Student();
    student.surname = 'Plus';
    student.name = 'RT';
    student.marks.push(mark);

    const group = new Gruppa();
    group.name = 'IG-1-15';
    // group.students.push(student);

    this.group = group;
    this.semesters.push(semester);
    this.subjects.push(subject);
    this.students.push(student);
  }

  getSubjectsBySemester(semester: Semester): Subject[] {
    const subjects: Subject[] = new Array();
    for (const student of this.students) {
      for (const mark of student.marks)  {
        if (mark.semester.id === semester.id) {
          if (subjects.indexOf(mark.subject) === -1) {
            this.subjects.push(mark.subject);
          }
        }
      }
    }
    return this.subjects;
  }

  updateTable(semester: Semester) {
    this.currentSemester = semester;
    this.subjects.length = 0;
    this.subjects = this.getSubjectsBySemester(this.currentSemester);
  }

  ngOnInit() {
    /*   this.activatedRoute.queryParams.subscribe(queryParams => {
         this.group = this.groupService.findById(+queryParams['id']);
       });*/
    this.updateTable(this.currentSemester);
  }

  ngOnDestroy(): void {
  }

}
