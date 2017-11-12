import {Component, Input, OnInit} from '@angular/core';
import {SubjectService} from '../../service/subject-service';
import {RoomService} from '../../service/room-service';
import {Lesson} from '../../shared/model/LessonModel';
import {Subject} from '../../shared/model/SubjectModel';
import {Room} from '../../shared/model/RoomModel';
import {LessonService} from "../../service/lesson-service";

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  @Input() lesson: Lesson;
  subjects: Subject[];
  rooms: Room[];

  constructor(private subjectService: SubjectService,
              private roomService: RoomService,
              private lessonService: LessonService) {
  }

  ngOnInit() {
    this.getAllSubjects();
    this.getAllRooms();
    console.log(this.lesson.subject.name);
  }

  getAllSubjects(): void {
    this.subjectService.getAll().then(subjects => {
      this.subjects = subjects;
      this.findSubjectById(this.lesson.subject.id);
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

  save(): void {
    this.lessonService.add(this.lesson).then(res => {
      if (res.ok) {
        alert('Успешно добавлен');
      }
    });
  }
}
