import {Component, OnInit} from '@angular/core';
import {Gruppa} from "../../../shared/para";
import {GroupService} from '../../../service/group-service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Gruppa[] = [];

  constructor(private groupService: GroupService) {
    groupService.getAll().then(gs => this.groups = gs);
  }

  ngOnInit() {
  }

}
