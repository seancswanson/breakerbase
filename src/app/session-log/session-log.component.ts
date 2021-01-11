import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-log',
  templateUrl: './session-log.component.html',
  styleUrls: ['./session-log.component.scss']
})
export class SessionLogComponent implements OnInit {
  data: any;

  constructor() {

  }

  ngOnInit() {
    this.data = [{
      date: '1/11/21',
      location: 'Home',
      tags: ['Toprock Drills', 'Footwork Drills',]
    },
    {
      date: '1/9/21',
      location: 'Massive Monkees',
      tags: ['Cypher', 'Toprock Freestyle']
    },
    {
      date: '1/11/21',
      location: 'Washington Hall',
      tags: ['Cypher', 'Musicality', 'Feelin\' myself']
    }]
  }

}
