import {Http, Headers, RequestOptions} from '@angular/http';

export class DefaultService<T> {
  private headers = new Headers({'Content-Type': 'application/json'});
  url = 'http://localhost:8080/api';
  serviceUrl = '/';

  constructor(protected http: Http) {

  }

  getAll(): Promise<T[]> {
    return this.http.get(this.url + this.serviceUrl)
      .toPromise().then(res => res.json() as T[])
      .catch(this.handleError);
  }

  add (model: T): Promise<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers });
    return this.http.post(this.url + this.serviceUrl, [model], options).toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Response> {
    return this.http.delete(this.url + this.serviceUrl + '/' + id,
      new RequestOptions({headers: this.headers})).toPromise()
      .then( res => res)
      .catch(this.handleError);
  }

  handleError(msg: any): Promise<any> {
    console.error('An error occurred', msg);
    return Promise.reject(msg.message || msg );
  }
}
