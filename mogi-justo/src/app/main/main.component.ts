import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FiltroOption } from '../util/filtro/filtro-option';
import { Filtro } from '../model/filtro';
import { ChartOptions } from 'chart.js';
import { ConfigChartUtil } from '../util/graph/config-chart-util';
import { LabelData } from '../util/graph/label-data';
import { ServidorService } from './_shared/servidor.service';
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  optionFiltro: Options = FiltroOption.createOption(8000);
  filtro: Filtro = { salarioMaximo: 7000, salarioMinimo: 200 };
  optionChart: ChartOptions = ConfigChartUtil.createConfigBarChart();
  labelData: LabelData;

  iconPie = faChartBar;
  iconBar = faChartPie;

  constructor(public servidorService: ServidorService) { }

  ngOnInit(): void {
    this.labelData = new LabelData(this.servidorService.getServidores(), 'nome', 'rendimentos');

    /*
    <i class="fa fa-bar-chart" aria-hidden="true"></i>
      <i class="fa fa-pie-chart" aria-hidden="true"></i>
    */
  }

}
