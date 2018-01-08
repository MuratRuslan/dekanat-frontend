import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {Subject} from '../../../shared/model/SubjectModel';
import {Student} from '../../../shared/model/StudentModel';
import {Semester} from '../../../shared/model/SemesterModel';
import {Mark} from '../../../shared/model/MarkModel';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../../service/subject-service';
import {MarkService} from '../../../service/mark-service';

import {SemesterService} from '../../../service/semester-service';
import {StudentService} from '../../../service/student-service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit, OnDestroy {

  notIncludedSubjects: Subject[] = [];
  group: Gruppa = new Gruppa();
  semesters: Semester[] = [];
  subjects: Subject[] = [];
  students: Student[] = [];
  currentSemester: Semester;
  dataChanged = false;
  edit = false;
  showTips = false;
  minMarktoPass = 2.6;
  removedMarks: Mark[] = [];

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private subjectService: SubjectService,
              private semesterService: SemesterService,
              private studentService: StudentService,
              private markService: MarkService,
              private router: Router) {
    /*setTimeout(() => {
     this.showTips = true;
     }, 2000);*/
  }

  updateTable(semester: Semester) {
    let students = this.students;
    this.edit = false;
    this.notIncludedSubjects.length = 0;
    this.currentSemester = semester;
    this.subjects.length = 0;
    this.students = students;
    this.subjects = this.getGroupSubjectsBySemester(this.students, this.currentSemester);
  }

  showStudentInfo(id: number): void {
    this.router.navigate(['student', id]);
  }

  ngOnInit() {
    console.log('init')
    this.semesterService.getAll().then(s => {
        this.semesters = s;
      }
    );
    this.activatedRoute.params.subscribe(queryParams => {
      this.groupService.getById(+queryParams['id']).then(group => {
        this.group = group;
        this.studentService.getStudentsByGroupId(this
          .group.id).then(students => {
            this.students = students;
            if (this.students != null) {
              this.updateTable(this
                .semesters[0]);
            } else {
              this.students = [];
            }
          }
        );
      });

    });
  }

  getFails(student, subject, semester): number {
    return +this.studentService.getFailsAmountBySubjectAndSemester(student, subject, semester);
  }

  getFailsAmountBySubjectAndSemester(student, subject, semester) {
    var fails: number = this.getFails(student, subject, semester);
    if (fails <= 0) {
      return 'success';
    }
    if (fails === 1) {
      return 'warning';
    }
    if (fails === 2) {
      var last = +this
        .studentService.getMarkBySubjectAndSemester(student, subject, semester);
      if (last < this.minMarktoPass) {
        return 'fired';
      } else {
        return 'danger';
      }
    }
  }

  getGroupSubjectsBySemester(students: Student[], semester: Semester): Subject[] {
    const subjects: Subject[] = [];
    for (const student of students) {
      for (const mark of student.marks) {
        if (!this.contains(subjects, mark.subject) && mark.semester.id === semester.id) {
          subjects.push(mark.subject);
        }
      }
    }
    return subjects;
  }

  remove(subjects: Subject[], subject: Subject) {
    for (const s of subjects) {
      if (s.id === subject.id) {
        const index = subjects.indexOf(s);
        if (index > -1) {
          subjects = subjects.splice(index, 1);
        }
      }
    }
  }

  changeSelection() {
    if (this.edit) {
      this.edit = false;
      return;
    }
    this.edit = true;
  }

  onTableDataChanged() {
    this.dataChanged = true;
  }

  contains(subjects: Subject[], subject: Subject): boolean {
    for (const s of subjects) {
      if (s.id === subject.id) {
        return true;
      }
    }
    return false;
  }

  updateNotIncludedSubjects() {
    this.subjectService.getAll().then(subjects => {
      for (const s of subjects) {
        if (!this.contains(this.subjects, s) && !this.contains(this.notIncludedSubjects, s)) {
          this
            .notIncludedSubjects.push(s);
        }
      }
    });
  }

  onSaveChanges() {
    this.saveChanges();
  }

  hasAuthorityToEdit(subject: Subject): boolean {
    if (subject.id === 1)
      return true;
    return false;
  }

  saveChanges() {
    this.dataChanged = false;
    for (const student of this.students) {
      this.markService.addAll(student.marks);
    }
    for (const mark of this.removedMarks) {
      if (mark != null && mark.id != null) {
        this.markService.delete(mark.id);
      }
    }
  }

  addSubjectToTable(subject: Subject) {
    if (!this
        .contains(this.subjects, subject)) {
      this
        .remove(this.notIncludedSubjects, subject);

      this.onTableDataChanged();
      for (const student of this.students) {
        const mark = new Mark();
        mark.id = null;
        mark.student = student.id;
        mark.semester = this.currentSemester;
        mark.subject = subject;
        student.marks.push(mark);
      }
      this.subjects.push(subject);
    }
  }

  removeSubjectFromGroup(subject) {
    for (const student of this.students) {
      this
        .removedMarks.push(this.studentService.getMarkObjectBySubjectAndSemester(student, subject, this.currentSemester));
    }
    this.remove(this.subjects, subject);
    this.removeMarkFromStudentsBySubjectAndSemester(this.students, this.currentSemester, subject)
  }

  removeMarkFromStudentsBySubjectAndSemester(students: Student[], semester: Semester, subject: Subject) {
    for (const student of students) {
      for (const mark of student.marks) {
        if (mark.semester.id === semester.id && mark.subject.id === subject.id) {
          const index = student.marks.indexOf(mark);
          if (index > -1) {
            student.marks.splice(index, 1);
          }
        }
      }
    }
  }

  getFailsAmount(student: Student, semester) {
    var s: number = +this
      .studentService.getFailAmountBySemester(student, semester);
    ;
    if (s === 0) {
      return 'success';
    }
    if (s > 0 && s <= 2) {
      return 'warning';
    }
    if (s >= 3) {
      return 'danger';
    }
  }

  ngOnDestroy(): void {
    if (this.dataChanged
    ) {
      if (confirm('Save changes?')) {
        this.saveChanges();
      }
    }
  }

}
