import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Gruppa} from '../../../shared/model/GroupModel';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Subject';
import {GroupService} from '../../../service/group-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  @Output() groups: Gruppa[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectedGruppa: Gruppa;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private groupService: GroupService,
              private router: Router) {
  }

  ngOnInit() {
    this.initDtOptions();
    this.groupService.getAll()
      .then(groups => {
        this.groups = groups;
        this.dtTrigger.next();
      });
  }

  deleteGruppa(): void {
    this.groupService.delete(this.selectedGruppa.id).then(
      res => {
        const foundgroup = this.groups.find(group => group.id === this.selectedGruppa.id);
        this.groups.splice(this.groups.indexOf(foundgroup), 1);
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
          title: 'Группа',
          exportOptions: {
            modifier: {
              page: 'current'
            }
          }
        },
        {
          extend: 'csvHtml5',
          filename: 'Группа',
          text: 'csv',
          title: 'Группа',
          charset: 'UTF-16LE,',
          bom: true
        },
        {
          extend: 'excelHtml5',
          filename: 'Группа',
          exportOptions: {
            columns: ':visible'
          },
          title: 'Группа'
        }
      ],
      responsive: true
    };
  }

}
