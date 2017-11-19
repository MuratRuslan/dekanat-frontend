import {Gruppa} from './GroupModel';
import {Mark} from './MarkModel';
import {Subject} from "./SubjectModel";
import {Semester} from "./SemesterModel";

export class Student {
  id: number;
  name: string;
  surname: string;
  middleName: string;
  marks: Mark[] = [];
  gruppa: Gruppa;
}
