import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Room} from '../shared/model/RoomModel';
import {DefaultService} from './default-service';

@Injectable()
export class RoomService extends DefaultService<Room> {

  constructor(http: Http) {
    super(http);
    this.serviceUrl = '/rooms';
  }
}
