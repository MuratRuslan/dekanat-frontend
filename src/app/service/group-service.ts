import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Gruppa} from '../shared/model/GroupModel';
import {DefaultService} from './default-service';

@Injectable()
export class GroupService extends DefaultService<Gruppa> {

  constructor(http: Http) {
    super(http);
    this.serviceUrl = '/groups';
  }

}
