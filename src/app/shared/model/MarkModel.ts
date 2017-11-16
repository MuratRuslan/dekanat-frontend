import {Subject} from './SubjectModel';
import {Semester} from './SemesterModel';

export class Mark {
  id: number;
  marks: number[] = [];
  subject: Subject;
  semester: Semester;
}
