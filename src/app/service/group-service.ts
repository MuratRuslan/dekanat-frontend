import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Gruppa} from '../shared/para';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GroupService implements OnInit {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8080/api/';

  ngOnInit(): void {
  }

  constructor(private http: Http) {
  }

  getAll(): Promise<Gruppa[]> {
    return this.http.get(this.url + 'groups/')
      .toPromise().then(res => res.json() as Gruppa[])
      .catch(this.handleError);
  }

  handleError(msg: any): Promise<any> {
    console.error('An error occurred', msg);
    return Promise.reject(msg.message || msg );
  }
}
