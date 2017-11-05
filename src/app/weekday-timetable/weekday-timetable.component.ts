import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Gruppa, Lesson, Weekday} from '../shared/para';
import {forEach} from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-weekday-timetable',
  templateUrl: './weekday-timetable.component.html',
  styleUrls: ['./weekday-timetable.component.css']
})
export class WeekdayTimetableComponent implements OnInit {
  weekday: string;
  timetable: Lesson[] = Weekday.monday;
  groups:  Gruppa[] = [{'id' : 3,  'name' : 'ИГ-1-14'  },  {'id'  : 1,  'name'  : 'ИГ-1-15'  },
    {'id'  : 5,  'name'  : 'ИГ-1-16'  },  {'id'  : 8,  'name'  : 'ИГ-1-17'  },  {'id'  : 4,  'name'  : 'ИГ-2-14' },
    {'id' : 2,  'name' : 'ИГ-2-15' },  {'id' : 6,  'name' : 'ИГ-2-16' },  {'id' : 9,  'name' : 'ИГ-2-17' },
    {'id' : 7,  'name' : 'ИГ-3-16' },  {'id' : 10,  'name' : 'ИГ-3-17' },  {'id' : 11,  'name' : 'ИГ-4-17' }];
  times: string[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.weekday = '';
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.weekday = '';
        return params.get('day');
      })
      .subscribe(day => this.weekday += day);
  }

  getLessonByGroup(id: number): Lesson[] {
    return this.timetable.filter( obj => obj.gruppa.id === id);
  }

  getLessonsByGroupIdAndTime(id: number, time: string): Lesson[] {
    return this.timetable.filter( obj => (obj.gruppa.id === id) && (obj.time === time));
  }
}
