import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {isNull, isUndefined} from 'util';

@Injectable()
export class AuthenticationService {
  public token: string;
  public username: string;

  constructor(private http: Http) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post('http://31.186.53.209:8081/api/login', JSON.stringify({username: username, password: password}))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.headers.get('Authorization');
        if (token) {
          this.token = token;
          this.username = username;
          console.log(token);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.login('ANONYMOUS', 'ANONYMOUS').subscribe(
      (res) => {
        if (res) {
          console.log('loogen');
        } else {
          console.log('not nooogn');
        }
      }
    );
  }

  isAnonymous() {
    const userToken = JSON.parse(localStorage.getItem('currentUser'));
    if (userToken.username === 'ANONYMOUS' || isUndefined(userToken) || userToken == null) {
      return true;
    }
    return false;
  }

  hasNoToken() {
    const userToken = JSON.parse(localStorage.getItem('currentUser'));
    if (isUndefined(userToken) || isNull(userToken) || userToken == null) {
      return true;
    }
    return false;
  }

  isTokenExpired(): boolean {
    const headers = new Headers({'Authorization': 'Bearer ' + this.token});
    const options = new RequestOptions({headers: headers});
    let expired = false;
    this.http.get('http://31.186.53.209:8081/api/semesters', options)
      .toPromise().then( () => {
        console.log('then');
      return false;
    })
      .catch(() => {
        console.log('catecch ');
        return true;
      }).then((res) => expired = res);
    return expired;
  }
}
