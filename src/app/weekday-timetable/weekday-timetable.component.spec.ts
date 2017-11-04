import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayTimetableComponent } from './weekday-timetable.component';

describe('WeekdayTimetableComponent', () => {
  let component: WeekdayTimetableComponent;
  let fixture: ComponentFixture<WeekdayTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdayTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdayTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
