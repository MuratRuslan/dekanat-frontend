import {Injectable, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Room} from '../shared/model/RoomModel';
import {DefaultService} from './default-service';
import {AuthenticationService} from "./authentication-service";

@Injectable()
export class RoomService extends DefaultService<Room> {

  constructor(http: Http,
              authenticationService: AuthenticationService) {
    super(http, authenticationService);
    this.serviceUrl = '/rooms';
  }
}
