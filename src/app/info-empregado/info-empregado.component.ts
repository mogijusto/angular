import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { EmpregadoService } from './empregado.service';
import { Empregado } from '../model/empregado';

@Component({
  selector: 'app-info-empregado',
  templateUrl: './info-empregado.component.html',
  styleUrls: ['./info-empregado.component.scss']
})
export class InfoEmpregadoComponent implements OnInit {

  public empregado = new Empregado();
  constructor(
    private readonly route: ActivatedRoute,
    private readonly empregadoService: EmpregadoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.empregadoService.findOne(+id).subscribe(data => {
      this.empregado = data;
    }, error => {
      console.log(error);
    });
  }

}
