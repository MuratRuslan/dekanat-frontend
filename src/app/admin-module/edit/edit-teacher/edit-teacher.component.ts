import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Teacher} from '../../../shared/model/TeacherModel';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Subject';
import {TeacherService} from '../../../service/teacher-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  @Output() teachers: Teacher[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectedTeacher: Teacher;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private teacherService: TeacherService,
              private router: Router) {
  }

  ngOnInit() {
    this.initDtOptions();
    this.teacherService.getAll()
      .then(teachers => {
        this.teachers = teachers;
        this.dtTrigger.next();
      });
    // this.teacherService.getById(4).then(teacher => this.selectedTeacher = teacher);
  }

  deleteteacher(): void {
    this.teacherService.delete(this.selectedTeacher.id).then(
      res => {
        const foundteacher = this.teachers.find(teacher => teacher.id === this.selectedTeacher.id);
        this.teachers.splice(this.teachers.indexOf(foundteacher), 1);
        this.rerender();
      }
    );
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  initDtOptions(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY: true,
      scrollX: true,
      scrollCollapse: true,
      destroy: true,
      dom: 'Bfrtip',
      buttons: [
        'copy',
        {
          extend: 'print',
          text: 'Распечатать/PDF',
          title: 'Преподователи',
          exportOptions: {
            modifier: {
              page: 'current'
            }
          }
        },
        {
          extend: 'csvHtml5',
          filename: 'Преподователи',
          text: 'csv',
          title: 'Преподователи',
          charset: 'UTF-16LE,',
          bom: true
        },
        {
          extend: 'excelHtml5',
          filename: 'Преподователи',
          exportOptions: {
            columns: ':visible'
          },
          title: 'Преподователи'
        }
      ],
      responsive: true
    };
  }


}
