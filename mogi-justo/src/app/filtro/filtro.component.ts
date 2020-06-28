import { Component, OnInit, Output, Input } from '@angular/core';
import { Options } from 'ng5-slider';
import { Filtro } from '../model/filtro';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
// https://angular-slider.github.io/ng5-slider/demos#range-slider
export class FiltroComponent implements OnInit {
  @Input() filtro: Filtro;
  @Input() option: Options = {};
  constructor() { }

  ngOnInit(): void {
  }

  btnLimpar() { 
    this.filtro = new Filtro();
    this.option = new Options();
  }

}
