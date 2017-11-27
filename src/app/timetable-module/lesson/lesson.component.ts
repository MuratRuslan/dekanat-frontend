import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../service/lesson-service';
import {Lesson} from '../../shared/model/LessonModel';
import {GroupService} from '../../service/group-service';
import {Gruppa} from '../../shared/model/GroupModel';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lessons: Lesson[] = [];
  group: Gruppa;
  ready = false;

  constructor(private lessonService: LessonService,
              private groupService: GroupService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const time = params['time'];
      const id: number = +params['id'];
      const day = params['weekday'];
      this.groupService.getById(id).then( res => {
        this.group = res;
        this.getAllLessonsByDayAndTimeAndGroup(day, time, id);
      });
    });
  }

  createEmptyLesson(weekday: string, time: string, denominator): Lesson {
    return {time: time, day: weekday, subject: {id: null, name: ''},
      rooms: [], gruppa: this.group, id: null, teachers: [], denominator: denominator, type: 'ЛК'};
  }

  getAllLessonsByDayAndTimeAndGroup(weekday: string, time: string, groupId: number) {
    this.lessonService.getAllByDay(weekday).then(result => {
      if (result !== null) {
        this.lessons = result.filter(
          obj => obj.day === weekday && obj.gruppa.id === groupId && obj.time === time
        );
      }
      if (this.lessons.length === 0) {
        this.lessons = [this.createEmptyLesson(weekday, time, false), this.createEmptyLesson(weekday, time, true)];
      }
      if (this.lessons.length === 1) {
        this.lessons = [this.lessons[0], this.createEmptyLesson(weekday, time, true)];
      }
      this.ready = true;
    });
  }
}
