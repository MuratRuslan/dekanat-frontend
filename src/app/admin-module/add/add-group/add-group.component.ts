import { Component, OnInit } from '@angular/core';
import {Gruppa} from '../../../shared/model/GroupModel';
import {GroupService} from '../../../service/group-service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group: Gruppa;
  constructor(private groupService: GroupService) {
    this.group = new Gruppa();
  }

  ngOnInit() {
  }

  save(): void {
    this.groupService.add(this.group).then( res => {
      alert(res);
    });
  }

}
