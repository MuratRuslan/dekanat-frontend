import {Student, Teacher} from '../shared/para';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentService {

  private headers = new Headers({'Content-Type': 'application/json'});
  teacherUrl = 'http://localhost:8080/student';

  constructor(private http: HttpClient) {

  }


  findAll(): Student[] {
    return null;
  }
}
