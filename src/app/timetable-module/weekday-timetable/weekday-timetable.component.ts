import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LessonService} from '../../service/lesson-service';
import {GroupService} from '../../service/group-service';
import {Gruppa} from '../../shared/model/GroupModel';
import {Lesson} from '../../shared/model/LessonModel';
import {Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-weekday-timetable',
  templateUrl: './weekday-timetable.component.html',
  styleUrls: ['./weekday-timetable.component.css']
})
export class WeekdayTimetableComponent implements OnInit, AfterViewInit {
  weekday: string;
  timetable: Lesson[];
  groups: Gruppa[] = [];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  times: string[] = ['08:00:00', '09:30:00', '11:00:00', '12:30:00', '14:00:00', '15:30:00', '17:00:00'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonService: LessonService,
              private groupService: GroupService) {
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

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  getLessonByGroup(id: number): Lesson[]{
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
    this.router.navigate(['timetable/lesson', groupId, time, this.weekday]);
  }

  initDtOptions(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      displayLength: 25,
      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        {
          extend: 'print',
          text: 'Распечатать/PDF',
          title: this.weekday,
          exportOptions: {
            modifier: {
              page: 'current'
            }
          }
        },
        {
          extend: 'csvHtml5',
          filename: 'Расписание',
          text: 'csv',
          title: this.weekday,
          charset: 'UTF-16LE,',
          bom: true
        },
        {
          extend: 'excelHtml5',
          filename: 'Расписание',
          exportOptions: {
            columns: ':visible'
          },
          title: this.weekday
        },
        {
          extend: 'pdfHtml5',
          filename: 'Расписание',
          title: this.weekday,
          orientation: 'landscape',
          pageSize: 'LEGAL'
        }
      ],
      responsive: true
    };
  }
}
