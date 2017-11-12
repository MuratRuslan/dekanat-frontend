import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Student} from '../shared/model/StudentModel';
import {DefaultService} from './default-service';
import {Http} from '@angular/http';

@Injectable()
export class StudentService extends DefaultService<Student> {

  constructor(http: Http) {
    super(http);
    this.serviceUrl = '/students';
  }

}
