import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Lesson} from '../shared/model/LessonModel';
import {DefaultService} from './default-service';
import {AuthenticationService} from './authentication-service';

@Injectable()
export class LessonService extends DefaultService<Lesson> {


  constructor(http: Http,
              authenticationService: AuthenticationService) {
    super(http, authenticationService);
    this.serviceUrl = '/lessons';
  }
  getAllByDay(weekday: string): Promise<Lesson[]> {
    return this.http.get(this.url + this.serviceUrl + '/day/' + weekday)
      .toPromise().then(res => res.json() as Lesson[])
      .catch(this.handleError);
  }

  handleError(msg: Response): Promise<string> {
    console.error('An error occurred', msg);
    return Promise.resolve(msg.text());
  }
}
