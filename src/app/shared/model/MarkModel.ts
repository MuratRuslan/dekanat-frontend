import {Subject} from './SubjectModel';
import {Semester} from './SemesterModel';

export class Mark {
  id: number;
  mark: number;
  subject: Subject;
  semester: Semester;
}
