import { Component, OnInit } from '@angular/core';
import {Weekday} from '../shared/para';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weekday-list',
  templateUrl: './weekday-list.component.html',
  styleUrls: ['./weekday-list.component.css']
})
export class WeekdayListComponent implements OnInit {
  // weeks = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА',
  //   'СУББОТА', 'ВОСКРЕСЕНЬЕ'];
  weeks: string[] = Weekday.weekdays;
  selectedDay: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(day: string): void {
    this.selectedDay = day;
    this.goToDetails();
  }

  goToDetails() {
    this.router.navigate(['/detail', this.selectedDay]);
  }
}
