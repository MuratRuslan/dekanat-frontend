import {Component, OnInit} from '@angular/core';
import {Room} from '../../../shared/model/RoomModel';
import {RoomService} from '../../../service/room-service';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room: Room = new Room();

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
  }

  addRoom() {
    this.roomService.add(this.room).then(res => {
      alert(res);
    });
  }

}
