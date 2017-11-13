import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../../service/subject-service';
import {Subject} from '../../../shared/model/SubjectModel';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  subject: Subject;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  addSubject() {
    this.subjectService.add(this.subject);
  }

}
