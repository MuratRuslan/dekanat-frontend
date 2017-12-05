import {Subject} from './SubjectModel';
import {Semester} from './SemesterModel';
import {Student} from './StudentModel';

export class Mark {
  id:number;
  marks:number[] = [];
  student:number;
  subject:Subject;
  semester:Semester;
}
