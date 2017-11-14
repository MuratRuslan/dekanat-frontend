import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  GROUPS = ['ИГ-1-16', 'ИГ-2-16', 'ИГ-3-16', 'ИГ-2-16', 'ИГ-1-17',
    'ИГ-2-17', 'ИГ-1-18', 'ИГ-2-18', 'ИГ-3-18'];
  groups: Gruppa[] = [];

  constructor(private groupService: GroupService) {
  /*  groupService.getAll().then(groups => {
      this.groups = groups;
    });*/
  }

  ngOnInit() {
  }

}
