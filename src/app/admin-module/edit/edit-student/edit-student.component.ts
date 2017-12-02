import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
import {StudentService} from '../../../service/student-service';
import {Student} from '../../../shared/model/StudentModel';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  @Output() students: Student[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectedStudent: Student;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private studentService: StudentService,
              private router: Router) {
  }

  ngOnInit() {
    this.initDtOptions();
    this.studentService.getAll()
      .then(students => {
        this.students = students;
        this.dtTrigger.next();
      });
    // this.studentService.getById(4).then(student => this.selectedStudent = student);
  }

  deleteStudent(): void {
    this.studentService.delete(this.selectedStudent.id).then(
      res => {
        const foundStudent = this.students.find(student => student.id === this.selectedStudent.id);
        this.students.splice(this.students.indexOf(foundStudent), 1);
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
          title: 'Студенты',
          exportOptions: {
            modifier: {
              page: 'current'
            }
          }
        },
        {
          extend: 'csvHtml5',
          filename: 'Студенты',
          text: 'csv',
          title: 'Студенты',
          charset: 'UTF-16LE,',
          bom: true
        },
        {
          extend: 'excelHtml5',
          filename: 'Студенты',
          exportOptions: {
            columns: ':visible'
          },
          title: 'Студенты'
        }
      ],
      responsive: true
    };
  }

}
