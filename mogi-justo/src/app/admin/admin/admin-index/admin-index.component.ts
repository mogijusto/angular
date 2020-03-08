import { Component, OnInit } from '@angular/core';
import { IP } from '../model/ip';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {

  IPs: IP[];

  constructor() { }

  ngOnInit(): void {
    this.IPs = [
      {
        numeroIP: '192.168.11.2',
        date: new Date()
      },
      {
        numeroIP: '192.168.1.2',
        date: new Date()
      },
      {
        numeroIP: '192.168.8.2',
        date: new Date()
      },
      {
        numeroIP: '192.168.11.29',
        date: new Date()
      },
      {
        numeroIP: '192.168.11.772',
        date: new Date()
      }
    ];
  }

}
