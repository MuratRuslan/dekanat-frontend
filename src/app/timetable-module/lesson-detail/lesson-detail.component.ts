import {Component, Input, OnInit} from '@angular/core';
import {SubjectService} from '../../service/subject-service';
import {RoomService} from '../../service/room-service';
import {Lesson} from '../../shared/model/LessonModel';
import {Subject} from '../../shared/model/SubjectModel';
import {Room} from '../../shared/model/RoomModel';
import {LessonService} from '../../service/lesson-service';
import {TeacherService} from '../../service/teacher-service';
import {Teacher} from '../../shared/model/TeacherModel';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  @Input() lesson: Lesson;
  subjects: Subject[];
  rooms: Room[];
  teachers: Teacher[];
  lessonTypes = ['ЛК', 'ПР'];

  constructor(private subjectService: SubjectService,
              private roomService: RoomService,
              private lessonService: LessonService,
              private teacherService: TeacherService) {
  }

  ngOnInit() {
    this.getAllSubjects();
    this.getAllRooms();
    this.getAllTeachers();
  }

  getAllSubjects(): void {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
      this.findSubjectById(this.lesson.subject.id);
    });
  }

  getAllTeachers(): void {
    this.teacherService.getAll().then(teachers => {
      this.teachers = teachers;
      this.findTeachers(this.lesson.teachers);
    });
  }

  getAllRooms(): void {
    this.roomService.getAll().then(rooms => {
      this.rooms = rooms;
      this.findRooms(this.lesson.rooms);
    });
  }

  findSubjectById(id: number) {
    this.lesson.subject = this.subjects.find(subj => subj.id === id);
  }

  findRooms(rooms: Room[]) {
    for (let i = 0; i < rooms.length; i++) {
      rooms[i] = this.rooms.find(r => r.id === rooms[i].id);
    }
  }

  findTeachers(teachers: Teacher[]) {
    for (let i = 0; i < teachers.length; i++) {
      teachers[i] = this.teachers.find(teacher => teacher.id === teachers[i].id);
    }
  }

  save(): void {
    this.lessonService.add(this.lesson).then(res => {
      alert(res);
    });
    // alert(this.lesson.gruppa.name + ' ' + this.lesson.gruppa.id);
  }


  delete(): void {
    this.lessonService.delete(this.lesson.id).then(
      res => {
        alert(res);
        this.emptyLesson();
      }
    );
  }

  emptyLesson(): void {
    this.lesson = {time: this.lesson.time, day: this.lesson.day, subject: {id: null, name: ''},
      rooms: [], gruppa: this.lesson.gruppa, id: null, teachers: [], denominator: this.lesson.denominator, type: this.lessonTypes[0]};
  }
}
