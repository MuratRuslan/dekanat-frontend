import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../service/group-service';
import {Gruppa} from '../../shared/para';

@Component({
  selector: 'app-new-group',
  providers: [GroupService],
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  group: Gruppa = new Gruppa();

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
  }

  addGroup() {
    this.groupService.add(this.group);
  }

}
