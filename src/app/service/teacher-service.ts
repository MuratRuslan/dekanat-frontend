import {Teacher} from '../shared/para';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TeacherService {

  private headers = new Headers({'Content-Type': 'application/json'});
  teacherUrl = 'http://localhost:8080/teacher';

  constructor(private http: HttpClient) {

  }

  getAll(): Promise<Teacher[]> {
    return null;
  }

  add(teacher: Teacher) {
    this.http
      .post(this.teacherUrl.concat('/add'), JSON.stringify(teacher), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      }).subscribe();
  }
}
