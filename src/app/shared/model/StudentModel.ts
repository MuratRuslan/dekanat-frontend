import {Gruppa} from './GroupModel';
import {Mark} from './MarkModel';
import {Subject} from "./SubjectModel";
import {Semester} from "./SemesterModel";

export class Student {
  id: number;
  name: string;
  surname: string;
  middleName = '';
  marks: Mark[] = [];
  gruppa: Gruppa;

  getFailsAmountBySubjectAndSemester(subject: Subject, semester: Semester): number {
    const retakes = 0;
    for (const mark of this.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id && mark.marks.length > 1) {
        console.log('fail');
        return mark.marks.length - 1;
      }
    }
    return 0;
  }

  getAllFailsAmount(): number {
    return 0;
  }

  getMarkBySubjectAndSemester(student: Student, subject: Subject, semester: Semester): any {
    for (const mark of student.marks) {
      if (mark.subject.id === subject.id && mark.semester.id === semester.id) {
        if (mark.marks === undefined || mark.marks.length === 0) {
          return '-';
        }
        console.log('iterating');
        return mark.marks[mark.marks.length - 1];
      }
    }
    return '-';
  }
}
