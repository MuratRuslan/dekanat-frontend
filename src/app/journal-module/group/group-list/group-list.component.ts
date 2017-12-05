import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Gruppa[] = [];

  constructor(private groupService: GroupService,
              private router: Router) {
    groupService.getAll().then(groups => {
      this.groups = groups;
    });
  }

  ngOnInit() {
  }

  navigateToGroupInfo(id: number): void {
    this.router.navigate(['journal/group', id]);
  }
}
