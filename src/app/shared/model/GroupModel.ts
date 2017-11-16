import {Student} from './StudentModel';
import {Semester} from './SemesterModel';
import {Subject} from './SubjectModel';

export class Gruppa {
  id: number;
  name: string;
  students: Student[] = [];

  getGroupSubjectsBySemester(semester: Semester): Subject[] {
    const subjects: Subject[] = new Array();
    for (const student of this.students) {
      for (const mark of student.marks) {
        if (mark.semester.id === semester.id) {
          if (subjects.indexOf(mark.subject) === -1) {
            subjects.push(mark.subject);
          }
        }
      }
    }
    return subjects;
  }

}
