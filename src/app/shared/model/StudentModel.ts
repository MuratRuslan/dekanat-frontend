import {Gruppa} from './GroupModel';
import {Mark} from './MarkModel';

export class Student {
  id: number;
  name: string;
  surname: string;
  middleName = '';
  marks: Mark[] = [];
  gruppa: Gruppa;
}
