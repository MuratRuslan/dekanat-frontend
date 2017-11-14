import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../../service/subject-service';
import {Subject} from '../../../shared/model/SubjectModel';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  subject: Subject = new Subject();
  constructor(private subjectService: SubjectService) {
    this.subject.teachers = [];
  }

  ngOnInit() {
  }

  addSubject() {
    this.subjectService.add(this.subject).then(msg => alert(msg));
  }

}
