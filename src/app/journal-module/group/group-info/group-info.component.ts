import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {Subject} from '../../../shared/model/SubjectModel';
import {Student} from '../../../shared/model/StudentModel';
import {Semester} from '../../../shared/model/SemesterModel';
import {Mark} from '../../../shared/model/MarkModel';
import {ActivatedRoute} from '@angular/router';
import {SubjectService} from '../../../service/subject-service';
import {SemesterService} from '../../../service/semester-service';
import {StudentService} from '../../../service/student-service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit, OnDestroy {

  tempSubjects: Subject[] = [
    {id: 5, name: 'Database'},
    {id: 3, name: 'Economics'},
    {id: 2, name: 'Deutsch'},
    {id: 1, name: 'Informatics'},
    {id: 1, name: 'Algorithmen'},
    {id: 2, name: 'Chemistry'},
    {id: 2, name: 'Geometry'}
  ];
  group: Gruppa = new Gruppa();
  subjects: Subject[] = [];
  students: Student[] = [];
  currentSemester: Semester;
  dataChanged = false;
  selected = false;

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private subjectService: SubjectService,
              private semesterService: SemesterService,
              private studentService: StudentService) {
    this.test();
  }

  test() {
    const semester = new Semester();
    semester.id = 1;
    semester.name = 'ЗИМНИЙ';
    semester.year = new Date('2017');
    this.currentSemester = semester;

    const subject = new Subject();
    subject.name = 'Math';
    subject.id = 1;

    const mark = new Mark();
    mark.subject = subject;
    mark.semester = semester;
    mark.marks.push(5);

    const m = new Mark();
    m.subject = subject;
    m.semester = semester;
    m.marks.push(2);

    const student = new Student();
    student.id = 1;
    student.surname = 'Renatov';
    student.name = 'Temirlan';
    student.marks.push(mark);

    const student2 = new Student();
    student2.id = 2;
    student2.surname = 'Aibekov';
    student2.name = 'Baktiyar';
    student2.marks.push(m);

    const group = new Gruppa();
    group.name = 'IG-1-15';

    this.group = group;
    this.subjects.push(subject);

    this.students.push(student);
    this.students.push(student2);

  }


  updateTable(semester: Semester) {
    this.currentSemester = semester;
    this.subjects.length = 0;
    this.subjects = this.getGroupSubjectsBySemester(this.students, this.currentSemester);
    console.log('update');
  }

  ngOnInit() {
    /*   this.activatedRoute.queryParams.subscribe(queryParams => {
         this.group = this.groupService.findById(+queryParams['id']);
       });*/

    this.updateTable(this.currentSemester);
  }

  getGroupSubjectsBySemester(students: Student[], semester: Semester): Subject[] {
    const subjects: Subject[] = [];
    for (const student of students) {
      for (const mark of student.marks) {
        if (subjects.indexOf(mark.subject) === -1) {
          subjects.push(mark.subject);
        }
      }
    }
    return subjects;
  }

  changeSelection() {
    if (this.selected) {
      this.selected = false;
      return;
    }
    this.selected = true;
  }

  onTableDataChanged() {
    this.dataChanged = true;
  }


  saveChanges() {
    this.dataChanged = false;
  }

  addSubjectToTable(subject: Subject) {
    this.onTableDataChanged();
    for (const student of this.students) {
      const mark = new Mark();
      mark.semester = this.currentSemester;
      mark.subject = subject;
      student.marks.push(mark);
    }
    this.subjects.push(subject);
    console.log('addSubject');
  }

  ngOnDestroy(): void {
    if (this.dataChanged) {
      if (confirm('Save changes?')) {
        this.saveChanges();
      }
    }
  }

}
