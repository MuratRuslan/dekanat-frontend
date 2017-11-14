import {Http, Headers, RequestOptions} from '@angular/http';

export class DefaultService<T> {
  private headers = new Headers({'Content-Type': 'application/json'});
  url = 'http://localhost:8080/api';
  serviceUrl = '/';

  constructor(protected http: Http) {

  }

  getById(id: number): Promise<T> {
    return this.http.get(this.url + this.serviceUrl + '/' + id)
      .toPromise().then( res => res.json() as T)
      .catch(this.handleError);
  }

  getAll(): Promise<T[]> {
    return this.http.get(this.url + this.serviceUrl)
      .toPromise().then(res => res.json() as T[])
      .catch(this.handleError);
  }

  add (model: T): Promise<string> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({headers: headers });
    return this.http.post(this.url + this.serviceUrl, [model], options).toPromise()
      .then(res => {
        return res.text();
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<string> {
    return this.http.delete(this.url + this.serviceUrl + '/' + id,
      new RequestOptions({headers: this.headers})).toPromise()
      .then( res => res.text())
      .catch(this.handleError);
  }

  handleError(msg: Response): Promise<string> {
    return Promise.resolve(msg.text());
  }
}
