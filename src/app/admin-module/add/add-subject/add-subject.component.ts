import {Component, Input, OnInit} from '@angular/core';
import {SubjectService} from '../../../service/subject-service';
import {Subject} from '../../../shared/model/SubjectModel';
import {isUndefined} from "util";

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  @Input() subject: Subject = new Subject();
  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
  }

  addSubject() {
    this.subjectService.add(this.subject).then(msg => {
      alert(msg);
      if (isUndefined(this.subject.id)) {
        this.subject = new Subject();
      }
    });
  }

}
