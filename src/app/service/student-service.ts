import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../shared/model/StudentModel';
import {DefaultService} from './default-service';
import {Http, RequestOptions, Headers} from '@angular/http';
import {Subject} from '../shared/model/SubjectModel';
import {Semester} from '../shared/model/SemesterModel';
import {Mark} from '../shared/model/MarkModel';
import {AuthenticationService} from "./authentication-service";

@Injectable()
export class StudentService extends DefaultService<Student> {

  constructor(http: Http, authService: AuthenticationService) {
    super(http, authService);
    this.serviceUrl = '/students';
  }

  getStudentsByGroupId(groupId: number): Promise<Student[]> {
    const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.url + this.serviceUrl + '/group/' + groupId, options).toPromise()
      .then(res => res.json() as Student[])
      .catch(res => res.text());
  }

  getFailsAmountBySubjectAndSemester(student: Student, subject: Subject, semester: Semester): number {
    const retakes = 0;
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id && mark.marks.length > 1) {
        return mark.marks.length - 1;
      }
    }
    return 0;
  }


  getFailAmountBySemester(student: Student, semester: Semester): number {
    let retakes = 0;
    for (const mark of student.marks) {
      if (mark.marks != null && mark.semester.id === semester.id && mark.marks.length > 1) {
        retakes++;
      }
    }
    return retakes;
  }

  getMarkBySubjectAndSemester(student: Student, subject: Subject, semester: Semester): any {
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id) {
        if (mark.marks === undefined || mark.marks.length === 0) {
          return '-';
        }
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
