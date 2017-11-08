export class Para {
  name:   string;
  time:   string;
  type:   string;
  room:   string;
  teacher:  string;
  weekday:  Weekday;
}

export class Weekday {
  static weekdays = ['ПОНЕДЕЛЬНИК',  'ВТОРНИК',  'СРЕДА',  'ЧЕТВЕРГ',  'ПЯТНИЦА', 'СУББОТА',  'ВОСКРЕСЕНЬЕ'];

  static monday: Lesson[] = [{'id': 3, 'day': 'MONDAY', 'subject': {'id': 2, 'name':
    'Информатика', 'teachers': []}, 'room': {'id': 1, 'name': '502'},
    'gruppa': {'id': 1, 'name': 'IG-1-15'}, 'time': '11:00:00'}, {'id': 5, 'day': 'MONDAY',
    'subject': {'id': 1, 'name': 'Математика', 'teachers': []}, 'room': {'id': 2, 'name': '401'}, 'gruppa':
      {'id': 2, 'name': 'IG-2-15'}, 'time': '08:00:00'}, {'id': 9, 'day': 'MONDAY', 'subject': {'id': 2,
    'name': 'Информатика', 'teachers': []}, 'room': {'id': 2, 'name': '401'}, 'gruppa': {'id': 1, 'name':
    'IG-1-15'}, 'time': '08:00:00'}, {'id': 10, 'day': 'MONDAY', 'subject': {'id': 2, 'name': 'Информатика',
    'teachers': []}, 'room': {'id': 2, 'name': '401'}, 'gruppa': {'id': 2, 'name': 'IG-2-15'}, 'time': '14:00:00'}];

  static tuesday: Lesson[] = [{'id': 4,  'day': 'ВТОРНИК',  'subject':
    {'id': 1,  'name': 'Математика',  'teachers': [{'id': 1,  'name': 'Тологон',
      'middleName': 'Карыпбекович',  'surname': 'Муктаров'}]},  'room': {'id': 2,
    'name': '401'},  'gruppa': {'id': 1,  'name': 'ИГ-1-15'},  'time': '08: 00: 00'}];
}

export class Lesson {
  id: number;
  day: string;
  subject: Subject;
  gruppa: Gruppa;
  time: string;
  room: Room;
}

export class Subject {
  id: number;
  name: string;
  teachers: Teacher[];
  toString() {
    return this.name;
  }
}

export class Teacher {
  id: number;
  name: string;
  surname: string;
  middleName: string;
}

export class Gruppa {
  id: number;
  name: string;
}

export class Room {
  id: number;
  name: string;
}
