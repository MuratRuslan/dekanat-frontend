import {Teacher} from '../shared/para';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TeacherService {

  teacherUrl = 'http://localhost:8080/teacher';

  constructor(private http: HttpClient) {

  }

  getAll(): any {
    return null;
  }

  add(teacher: Teacher) {
    this.http
      .post(this.teacherUrl.concat('/add'), JSON.stringify(teacher), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      }).subscribe();
  }
}
