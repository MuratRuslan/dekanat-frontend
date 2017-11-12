import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Teacher} from '../shared/model/TeacherModel';
import {DefaultService} from './default-service';

@Injectable()
export class TeacherService extends DefaultService<Teacher> {

  constructor(http: Http) {
    super(http);
    this.serviceUrl = '/teachers';
  }
}
