import {Gruppa} from './GroupModel';
import {Mark} from './MarkModel';

export class Student {
  id: number;
  name: string;
  surname: string;
  middleName: string;
  marks: Mark[] = [];
  gruppa: Gruppa;
}
