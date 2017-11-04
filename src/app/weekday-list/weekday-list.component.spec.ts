import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayListComponent } from './weekday-list.component';

describe('WeekdayListComponent', () => {
  let component: WeekdayListComponent;
  let fixture: ComponentFixture<WeekdayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
