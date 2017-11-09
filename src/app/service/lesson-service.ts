import {Lesson} from '../shared/para';
import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LessonService implements OnInit {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8080/api/';

  ngOnInit(): void {
  }

  constructor(private http: Http) {
  }
  getAllByDay(weekday: string): Promise<Lesson[]> {
    return this.http.get(this.url + 'lessons/' + weekday)
      .toPromise().then(res => res.json() as Lesson[])
      .catch(this.handleError);
  }

  getLessonById(id: number): Promise<Lesson> {
    return this.http.get(this.url + 'lesson/' + id)
      .toPromise().then(res => res.json() as Lesson)
      .catch(this.handleError);
  }

  handleError(msg: any): Promise<any> {
    console.error('An error occurred', msg);
    return Promise.reject(msg.message || msg );
  }
}
