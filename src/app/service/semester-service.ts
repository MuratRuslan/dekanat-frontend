import {DefaultService} from './default-service';
import {Semester} from '../shared/model/SemesterModel';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SemesterService extends DefaultService<Semester> {

  constructor(http: Http) {
    super(http);
    this.serviceUrl = '/semesters';
  }
  getSemesterInAnArrayById(semesters: Semester[], id: number): Semester {
    for (const semester of semesters) {
      if (semester.id === id) {
        return semester;
      }
    }
    return null;
  }
}
