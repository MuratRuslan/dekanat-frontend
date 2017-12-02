import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from '../../../shared/model/SubjectModel';
import {DataTableDirective} from 'angular-datatables';
import {Subject as S} from 'rxjs/Subject';
import {SubjectService} from '../../../service/subject-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {


  @Output() subjects: Subject[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectedSubject: Subject;
  dtOptions: any = {};
  dtTrigger: S<any> = new S();

  constructor(private subjectService: SubjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.initDtOptions();
    this.subjectService.getAll()
      .then(subjects => {
        this.subjects = subjects;
        this.dtTrigger.next();
      });
  }

  deleteSubject(): void {
    this.subjectService.delete(this.selectedSubject.id).then(
      res => {
        const foundSubject = this.subjects.find(subject => subject.id === this.selectedSubject.id);
        this.subjects.splice(this.subjects.indexOf(foundSubject), 1);
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
          title: 'Аудитория',
          exportOptions: {
            modifier: {
              page: 'current'
            }
          }
        },
        {
          extend: 'csvHtml5',
          filename: 'Аудитория',
          text: 'csv',
          title: 'Аудитория',
          charset: 'UTF-16LE,',
          bom: true
        },
        {
          extend: 'excelHtml5',
          filename: 'Аудитория',
          exportOptions: {
            columns: ':visible'
          },
          title: 'Аудитория'
        }
      ],
      responsive: true
    };
  }


}
