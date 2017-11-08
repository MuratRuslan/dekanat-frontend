import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Room} from '../shared/para';

@Injectable()
export class RoomService implements OnInit {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8080/api/';

  ngOnInit(): void {
  }

  constructor(private http: Http) {
  }

  getAll(): Promise<Room[]> {
    return this.http.get(this.url + 'rooms/')
      .toPromise().then(res => res.json() as Room[])
      .catch(this.handleError);
  }

  handleError(msg: any): Promise<any> {
    console.error('An error occurred', msg);
    return Promise.reject(msg.message || msg );
  }
}
