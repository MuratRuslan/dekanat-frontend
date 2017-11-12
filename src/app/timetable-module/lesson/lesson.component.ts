import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../service/lesson-service';
import {Lesson} from '../../shared/model/LessonModel';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lessons: Lesson[];

  constructor(private lessonService: LessonService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const time = params['time'];
      const id: number = +params['id'];
      const day = params['weekday'];
      this.getAllLessonsByDayAndTimeAndGroup(day, time, id);
    });
  }

  createEmptyLesson(weekday: string, time: string, groupId: number): Lesson {
    const lesson = new Lesson();
    lesson.time = time;
    lesson.day = weekday;
    lesson.subject = {id: null, name: ''};
    lesson.rooms = [];
    lesson.gruppa = {id: groupId, name: ''};
    return lesson;
  }

  getAllLessonsByDayAndTimeAndGroup(weekday: string, time: string, groupId: number) {
    this.lessonService.getAllByDay(weekday).then(result => {
      this.lessons = result.filter(
        obj => obj.day === weekday && obj.gruppa.id === groupId && obj.time === time
      );
      if (this.lessons.length === 0) {
        this.lessons = [this.createEmptyLesson(weekday, time, groupId), this.createEmptyLesson(weekday, time, groupId)];
      }
      if (this.lessons.length === 1) {
        this.lessons = [this.lessons[0], this.createEmptyLesson(weekday, time, groupId)];
      }
    });
  }
}
