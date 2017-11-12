import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Subject} from '../shared/model/SubjectModel';
import {DefaultService} from './default-service';

@Injectable()
export class SubjectService extends DefaultService<Subject> {

  constructor(http: Http) {
    super(http);
    this.serviceUrl = '/subjects';
  }
}
