import {Subject} from './SubjectModel';

export class Teacher {
  id: number;
  name: string;
  surname: string;
  middleName: string;
  subjects: Subject[];
}
