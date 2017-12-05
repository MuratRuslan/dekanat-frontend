import {Http, Headers, RequestOptions} from '@angular/http';
import {AuthenticationService} from './authentication-service';
import {OnInit} from "@angular/core";

export class DefaultService<T> {

  url = 'http://31.186.53.209:8081/api';
  serviceUrl = '/';

  constructor(protected http: Http,
              protected authenticationService: AuthenticationService) {
  }

  getById(id: number): Promise<T> {
    const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.url + this.serviceUrl + '/' + id, options)
      .toPromise().then(res => res.json() as T)
      .catch(this.handleError);
  }

  getAll(): Promise<T[]> {
    const headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.url + this.serviceUrl, options)
      .toPromise().then(res => res.json() as T[])
      .catch(this.handleError);
  }

  add(model: T): Promise<string> {
    return this.addAll([model]);
  }

  addAll(models: T[]): Promise<string> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.url + this.serviceUrl, models, options).toPromise()
      .then(res => {
        return res.text();
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<string> {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.authenticationService.token);
    const options = new RequestOptions({headers: headers});
    return this.http.delete(this.url + this.serviceUrl + '/' + id,
      options).toPromise()
      .then(res => res.text())
      .catch(this.handleError);
  }

  handleError(msg: Response): Promise<string> {
    return Promise.resolve(msg.text());
  }
}
