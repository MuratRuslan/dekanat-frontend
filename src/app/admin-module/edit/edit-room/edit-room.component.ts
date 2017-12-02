import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Room} from '../../../shared/model/RoomModel';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Subject';
import {RoomService} from '../../../service/room-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {


  @Output() rooms: Room[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  selectedRoom: Room;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private roomService: RoomService,
              private router: Router) {
  }

  ngOnInit() {
    this.initDtOptions();
    this.roomService.getAll()
      .then(rooms => {
        this.rooms = rooms;
        this.dtTrigger.next();
      });
  }

  deleteRoom(): void {
    this.roomService.delete(this.selectedRoom.id).then(
      res => {
        const foundroom = this.rooms.find(room => room.id === this.selectedRoom.id);
        this.rooms.splice(this.rooms.indexOf(foundroom), 1);
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
