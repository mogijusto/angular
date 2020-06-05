import { Component, OnInit } from '@angular/core';
import { CargoService } from './_shared/cargo.service';
import { Cargo } from 'src/app/model/cargo';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  cargos: Cargo[];
  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.cargos = this.cargoService.getnome();
  }

}
