import {Component, OnDestroy, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {Subject} from '../../../shared/model/SubjectModel';
import {Student} from '../../../shared/model/StudentModel';
import {Semester} from '../../../shared/model/SemesterModel';
import {Mark} from '../../../shared/model/MarkModel';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {SubjectService} from '../../../service/subject-service';
import {SemesterService} from '../../../service/semester-service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit, OnDestroy {

  tempSubjects: Subject[] = [
    {id: 5, name: 'Database', teachers: []},
    {id: 3, name: 'Economics', teachers: []},
    {id: 2, name: 'Deutsch', teachers: []},
    {id: 1, name: 'Informatics', teachers: []},
    {id: 1, name: 'Algorithmen', teachers: []},
    {id: 2, name: 'Chemostry', teachers: []},
    {id: 2, name: 'Geometry', teachers: []}
  ];
  group: Gruppa = new Gruppa();
  allSubjectsInDekanat: Subject[];
  subjects: Subject[] = [];
  students: Student[];
  semesters: Semester[] = [];
  currentSemester: Semester;
  dataChanged = false;
  maxRetakes = 3;

  constructor(private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private subjectService: SubjectService,
              private semesterService: SemesterService) {
    this.test();
    this.currentSemester = this.semesters[0];
  }

  test() {


    const semester = new Semester();
    semester.id = 1;
    semester.name = 'ЗИМНИЙ';
    semester.year = new Date('01 01 2017');

    const subject = new Subject();
    subject.name = 'Math';
    subject.id = 1;

    const mark = new Mark();
    mark.subject = subject;
    mark.semester = semester;
    mark.marks.push(5);
    mark.marks.push(4);
    mark.marks.push(3.8);

    const student = new Student();
    student.id = 1;
    student.surname = 'Renatov';
    student.name = 'Temirlan';
    student.marks.push(mark);

    const student2 = new Student();
    student2.id = 2;
    student2.surname = 'Aibekov';
    student2.name = 'Baktiyar';

    const group = new Gruppa();
    group.name = 'IG-1-15';
    group.students.push(student);
    group.students.push(student2);

    this.group = group;
    this.subjects.push(subject);
    const sem2 = new Semester();
    sem2.name = 'ЛЕТНИЙ';
    sem2.id = 2;
    sem2.year = new Date('01 01 2017');
    this.semesters.push(semester);
    this.semesters.push(sem2);

  }


  updateTable(semester: Semester) {
    this.currentSemester = semester;
    this.subjects.length = 0;
    this.subjects = this.group.getGroupSubjectsBySemester(this.currentSemester);
    console.log('noo');
  }

  ngOnInit() {
    /*   this.activatedRoute.queryParams.subscribe(queryParams => {
         this.group = this.groupService.findById(+queryParams['id']);
       });*/
    this.students = this.group.students;

    this.updateTable(this.currentSemester);


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
