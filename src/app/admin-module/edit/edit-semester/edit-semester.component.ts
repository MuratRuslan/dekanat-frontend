import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {Semester} from '../../../shared/model/SemesterModel';
import {SemesterService} from '../../../service/semester-service';

@Component({
  selector: 'app-edit-semester',
  templateUrl: './edit-semester.component.html',
  styleUrls: ['./edit-semester.component.css']
})
export class EditSemesterComponent implements OnInit {


  @Output() semesters: Semester[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectedSemester: Semester;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private semesterService: SemesterService,
              private router: Router) {
  }

  ngOnInit() {
    this.initDtOptions();
    this.semesterService.getAll()
      .then(semesters => {
        this.semesters = semesters;
        this.dtTrigger.next();
      });
  }

  deleteSemester(): void {
    this.semesterService.delete(this.selectedSemester.id).then(
      res => {
        const foundSemester = this.semesters.find(semester => semester.id === this.selectedSemester.id);
        this.semesters.splice(this.semesters.indexOf(foundSemester), 1);
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
          title: 'Семестр',
          exportOptions: {
            modifier: {
              page: 'current'
            }
          }
        },
        {
          extend: 'csvHtml5',
          filename: 'Семестр',
          text: 'csv',
          title: 'Семестр',
          charset: 'UTF-16LE,',
          bom: true
        },
        {
          extend: 'excelHtml5',
          filename: 'Семестр',
          exportOptions: {
            columns: ':visible'
          },
          title: 'Семестр'
        }
      ],
      responsive: true
    };
  }


}
