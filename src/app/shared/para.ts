export class Para {
  name: string;
  time: string;
  type: string;
  room: string;
  teacher: string;
  weekday: Weekday;
}

export class Weekday {
  static weekdays = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА',
    'СУББОТА', 'ВОСКРЕСЕНЬЕ'];
}
