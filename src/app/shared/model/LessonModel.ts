import {Subject} from './SubjectModel';
import {Gruppa} from './GroupModel';
import {Room} from './RoomModel';
import {Teacher} from "./TeacherModel";

export class Lesson {
  id: number;
  day: string;
  subject: Subject;
  gruppa: Gruppa;
  time: string;
  rooms: Room[];
  teachers: Teacher[];
  denominator: boolean;
}
