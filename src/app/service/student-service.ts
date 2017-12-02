import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../shared/model/StudentModel';
import {DefaultService} from './default-service';
import {Http} from '@angular/http';
import {Subject} from '../shared/model/SubjectModel';
import {Semester} from '../shared/model/SemesterModel';
import {Mark} from '../shared/model/MarkModel';
import {AuthenticationService} from './authentication-service';

@Injectable()
export class StudentService extends DefaultService<Student> {

  constructor(http: Http,
              authenticationService: AuthenticationService) {
    super(http, authenticationService);
    this.serviceUrl = '/students';
  }

  getStudentsByGroupId(groupId: number): Promise<Student[]> {
    return this.http.get(this.url + this.serviceUrl + '/group/' + groupId).toPromise()
      .then(res => res.json() as Student[])
      .catch(res => res.text());
  }

  getFailsAmountBySubjectAndSemester(student: Student, subject: Subject, semester: Semester): number {
    const retakes = 0;
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id && mark.marks.length > 1) {
        console.log('fail');
        return mark.marks.length - 1;
      }
    }
    return 0;
  }


  getAllFailsAmount(): number {
    return 0;
  }

  getMarkBySubjectAndSemester(student: Student, subject: Subject, semester: Semester): any {
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id) {
        if (mark.marks === undefined || mark.marks.length === 0) {
          return '-';
        }
        console.log('iterating');
        return mark.marks[mark.marks.length - 1];
      }
    }
    return '-';
  }

  getMarkObjectBySubjectAndSemester(student: Student, subject: Subject, semester: Semester): Mark {
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id) {
        return mark;
      }
    }
    return null;
  }
}
