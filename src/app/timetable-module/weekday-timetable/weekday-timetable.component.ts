import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LessonService} from '../../service/lesson-service';
import {GroupService} from '../../service/group-service';
import {Gruppa} from '../../shared/model/GroupModel';
import {Lesson} from '../../shared/model/LessonModel';
import {Subject} from 'rxjs/Rx';
import {AuthenticationService} from "../../service/authentication-service";
import {AuthGuard} from "../../guards/auth.guard";

@Component({
  selector: 'app-weekday-timetable',
  templateUrl: './weekday-timetable.component.html',
  styleUrls: ['./weekday-timetable.component.css']
})
export class WeekdayTimetableComponent implements OnInit {
  weekday: string;
  timetable: Lesson[];
  groups: Gruppa[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  times: string[] = ['08:00:00', '09:30:00', '11:00:00', '12:30:00', '14:00:00', '15:30:00', '17:00:00'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService,
              private groupService: GroupService,
              private authGuard: AuthGuard) {
  }

  ngOnInit() {
    this.weekday = '';
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.weekday = params.get('day');
        this.getAllLessonsForCurrentDay();
        return params.get('day');
      })
      .subscribe(day => {
      });
    this.getAllGroups();
    this.initDtOptions();
  }

  getLessonByGroup(id: number): Lesson[] {
    console.log('df');
    return this.timetable.filter(obj => obj.gruppa.id === id);
  }

  getLessonsByGroupIdAndTime(id: number, time: string): Lesson[] {
    const lessons = this.timetable.filter(obj => (obj.gruppa.id === id) && (obj.time === time));
    if (lessons === null || lessons.length === 0) {
      return [];
    }
    return lessons;
  }

  getAllLessonsForCurrentDay(): void {
    this.lessonService.getAllByDay(this.weekday)
      .then(obj => {
        this.timetable = obj;
        if (this.timetable === null) {
          this.timetable = [];
        }
        this.dtTrigger.next();
      });
  }

  delete(id: number): void {
    this.lessonService.delete(id).then(res => {
      alert(res);
    });
  }

  getAllGroups(): void {
    this.groupService.getAll().then(groups => this.groups = groups);
  }

  goToLessonDetails(groupId: number, time: string): void {
    if (!this.authGuard.isAnonymous()) {
      this.router.navigate(['timetable/lesson', groupId, time, this.weekday]);
    }
  }

  initDtOptions(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY:        true,
      scrollX:        true,
      scrollCollapse: true,
      paging:         true,
      dom: 'Bfrtip',
      buttons: [
      ],
      responsive: true
    };
  }
}
