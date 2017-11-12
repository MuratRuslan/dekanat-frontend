import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LessonService} from '../../service/lesson-service';
import {GroupService} from '../../service/group-service';
import {Gruppa} from '../../shared/model/GroupModel';
import {Lesson} from '../../shared/model/LessonModel';
@Component({
  selector: 'app-weekday-timetable',
  templateUrl: './weekday-timetable.component.html',
  styleUrls: ['./weekday-timetable.component.css']
})
export class WeekdayTimetableComponent implements OnInit {
  weekday: string;
  selectedTime: string;
  selectedGroup: Gruppa;
  timetable: Lesson[];
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
      });
    this.getAllGroups();
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

  delete(id: number): void {
    this.lessonService.delete(id).then( res => {
      if (res.ok) {
        alert('Успешно удален');
      }
    });
  }

  getAllGroups(): void {
    this.groupService.getAll().then(groups => this.groups = groups);
  }

  goToLessonDetails(groupId: number, time: string): void {
      this.router.navigate(['timetable/lesson', groupId, time, this.weekday]);
  }
}
