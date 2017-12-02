import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Subject} from '../shared/model/SubjectModel';
import {DefaultService} from './default-service';
import {AuthenticationService} from './authentication-service';

@Injectable()
export class SubjectService extends DefaultService<Subject> {

  constructor(http: Http,
              authenticationService: AuthenticationService) {
    super(http, authenticationService);
    this.serviceUrl = '/subjects';
  }
}
