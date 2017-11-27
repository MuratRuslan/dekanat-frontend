import {Component, Input, OnInit} from '@angular/core';
import {Gruppa} from '../../../shared/model/GroupModel';
import {GroupService} from '../../../service/group-service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  @Input() group: Gruppa = new Gruppa();

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
  }

  save(): void {
    this.groupService.add(this.group).then(res => {
      alert(res);
    });
  }

  getYears(): number[] {
    const res: number[] = [];
    for (let i = new Date().getFullYear(); i > 2000; i--) {
      res.push(i);
    }
    return res;
  }

}
