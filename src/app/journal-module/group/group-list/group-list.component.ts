import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../service/group-service';
import {Gruppa} from '../../../shared/model/GroupModel';
import {Router} from '@angular/router';
import {AuthGuard} from '../../../guards/auth.guard';

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
    groups: Gruppa[] = [];

    constructor(private groupService: GroupService,
                private router: Router,
                private authGuard: AuthGuard) {
        groupService.getAll().then(groups => {
            this.groups = groups;
        });
    }

    ngOnInit() {
    }

  goToGroupInfo(groupId: number): void {
    if (!this.authGuard.isAnonymous()) {
      this.router.navigate(['journal/group', groupId]);
    }
  }

}
