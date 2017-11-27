import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from '../../../shared/model/StudentModel';
import {StudentService} from '../../../service/student-service';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {isUndefined} from "util";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnChanges {
  @Input() student: Student = new Student();
  groups: Gruppa[] = [];

  constructor(private studentService: StudentService,
              private groupService: GroupService) {
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  init(): void {
    this.groupService.getAll()
      .then( groups => {
        this.groups = groups;
        if (!isUndefined(this.student.id)) {
          this.student.gruppa = this.findGroupById(this.student.gruppa.id);
        }
      });
  }


  addStudent(): void {
    this.studentService.add(this.student).then(res => {
      alert(res);
      if (isUndefined(this.student.id)) {
        this.student = new Student();
      }
    });
  }

  findGroupById(id: number): Gruppa {
    return this.groups.find( (group) => group.id === id);
  }

}
