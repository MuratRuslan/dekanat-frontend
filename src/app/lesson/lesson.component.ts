import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LessonService} from '../service/lesson-service';
import {Lesson, Room, Subject} from '../shared/para';
import {SubjectService} from '../service/subject-service';
import {RoomService} from '../service/room-service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input() lesson: Lesson;
  subjects: Subject[];
  rooms: Room[];

  constructor(private lessonService: LessonService,
              private subjectService: SubjectService,
              private roomService: RoomService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     return this.lessonService.getLessonById(params.get('id'));
    //   })
    //   .subscribe(lesson => {
    //     if (lesson === null) {
    //       this.lesson = new Lesson();
    //     }
    //       this.lesson = lesson;
    //   });
    this.route.params.subscribe(params => {
      this.getAllSubject();
      this.getLessonByGroupIdAndTimeAndWeekday(+params['id'], params['time'], params['weekday']);
      if (!this.lesson) {
        this.lesson = new Lesson();
        this.lesson.time = params['time'];
        console.log(this.lesson.time);
      }
    });
    this.getAllRoom();
  }

  getAllSubject(): void {
    this.subjectService.getAll()
      .then(subjects => this.subjects = subjects);
  }

  getAllRoom(): void {
    this.roomService.getAll()
      .then(rooms => this.rooms = rooms);
  }

  findSubjectByName(name: string): Subject {
    return this.subjects.find(obj => obj.name === name);
  }

  getLessonByGroupIdAndTimeAndWeekday(groupId: number, time: string, weekday: string) {
    /*  this.lessonService.getAllByDay(weekday).then(
        less => this.lesson = less.find(
          obj => obj.time === time && obj.gruppa.id === groupId && obj.day === weekday)
      );*/
  }

  onClick(): void {
    console.log(this.lesson.subject.name);
  }
}
