import { Component, OnInit } from '@angular/core';
import { IP } from '../model/ip';
import { IpService } from '../_shared/ip.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.scss']
})
export class AdminIndexComponent implements OnInit {

  IPs: IP[];

  constructor(
    private readonly ipService: IpService
  ) { }

  ngOnInit(): void {
    this.ipService.getAll().subscribe(data => {
      this.IPs = data;
    }, error => {
      console.log(error);
    });

  }
  format(data: any | Date): string {
    return new Date(data).toLocaleString();
  }

}
