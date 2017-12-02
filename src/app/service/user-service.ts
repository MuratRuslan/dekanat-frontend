import {User} from '../shared/model/UserModel';
import 'rxjs/add/operator/toPromise';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {DefaultService} from './default-service';
import {AuthenticationService} from './authentication-service';

@Injectable()
export class UserService extends DefaultService<User> {
  constructor(http: Http,
              authenticationService: AuthenticationService) {
    super(http, authenticationService);
    this.serviceUrl = '/users';
  }
}
