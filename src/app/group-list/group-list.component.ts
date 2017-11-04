import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  GROUPS = ['ИГ-1-16', 'ИГ-2-16', 'ИГ-3-16', 'ИГ-2-16', 'ИГ-1-17',
    'ИГ-2-17', 'ИГ-1-18', 'ИГ-2-18', 'ИГ-3-18'];
  constructor() { }

  ngOnInit() {
  }

}
