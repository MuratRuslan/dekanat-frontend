import {Subject} from './SubjectModel';
import {Gruppa} from './GroupModel';
import {Room} from './RoomModel';

export class Lesson {
  id: number;
  day: string;
  subject: Subject;
  gruppa: Gruppa;
  time: string;
  rooms: Room[];
}
