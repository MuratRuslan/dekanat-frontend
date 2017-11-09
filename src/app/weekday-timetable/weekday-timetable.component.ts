import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Gruppa, Lesson, Weekday} from '../shared/para';
import {LessonService} from '../service/lesson-service';
import {GroupService} from '../service/group-service';
@Component({
  selector: 'app-weekday-timetable',
  templateUrl: './weekday-timetable.component.html',
  styleUrls: ['./weekday-timetable.component.css']
})
export class WeekdayTimetableComponent implements OnInit {
  weekday: string;
  selectedTime: string;
  selectedGroup: Gruppa;
  timetable: Lesson[]/* = Weekday.monday*/;
  groups: Gruppa[] = [];
  times: string[] = ['08:00:00', '09:30:00', '11:00:00', '12:30:00', '14:00:00', '15:30:00', '17:00:00'];
  @Input() selectedLesson: Lesson;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService,
              private groupService: GroupService) { }

  ngOnInit() {
    this.weekday = '';
    this.route.paramMap
      .switchMap((params: ParamMap) => {
      this.weekday = params.get('day');
        this.getAll();
        return params.get('day');
      })
      .subscribe(day => {
        // return this.weekday += day;
      });
    this.getAllGroups();
    // console.log(this.weekday);
  }

  getLessonByGroup(id: number): Lesson[] {
    return this.timetable.filter( obj => obj.gruppa.id === id);
  }

  getLessonsByGroupIdAndTime(id: number, time: string): Lesson[] {
    return this.timetable.filter( obj => (obj.gruppa.id === id) && (obj.time === time));
  }

  getAll(): void {
    this.lessonService.getAllByDay(this.weekday)
      .then(obj => {
        return this.timetable = obj;
      });
  }


  getAllGroups(): void {
    this.groupService.getAll().then(groups => this.groups = groups);
  }

  goToLessonDetails(groupId: number, time: string): void {
      this.router.navigate(['/lesson', groupId, time, this.weekday]);
  }
}
