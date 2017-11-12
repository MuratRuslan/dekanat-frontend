import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Weekday} from '../../shared/model/Weekday';

@Component({
  selector: 'app-weekday-list',
  templateUrl: './weekday-list.component.html',
  styleUrls: ['./weekday-list.component.css']
})
export class WeekdayListComponent implements OnInit {
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
    this.router.navigate(['timetable/detail', this.selectedDay]);
  }
}
