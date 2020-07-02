import { Component, OnInit } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mogi-justo';

  constructor(private testeService: TesteService) {
  }
  ngOnInit() {
    // this.testeService.getTeste().subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // });
  }

}
