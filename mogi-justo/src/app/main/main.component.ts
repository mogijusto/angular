import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FiltroOption } from '../util/filtro/filtro-option';
import { Filtro } from '../model/filtro';
import { ChartOptions } from 'chart.js';
import { ConfigChartUtil } from '../util/graph/config-chart-util';
import { LabelData } from '../util/graph/label-data';
import { ServidorService } from './_shared/servidor.service';
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { IpService } from '../admin/admin/_shared/ip.service';
import { IP } from '../admin/admin/model/ip';
import { Servidor } from '../model/servidor';
import { Router } from '@angular/router';
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
  public servidores: Servidor[] = [];
  ip: IP;

  constructor(
    private readonly servidorService: ServidorService,
    private readonly ipService: IpService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.servidorService.getServidores().subscribe(data => {
      this.servidores = data.map(servidor => Servidor.anyToServidor(servidor));
      this.labelData = new LabelData(this.servidores, 'nome', 'rendimentos');
    }, error => {
      console.log(error);
    });
    if (!localStorage.getItem('ip')) {
      this.saveIp();
    }
  }
  saveIp(): void {
    this.ipService.getIpLocal().subscribe(data => {
      this.ip = new IP();
      this.ip.ipNome = data.ip;
      this.ip.hostname = data.hostname;
      this.ip.acesso = new Date();
      this.ipService.save(this.ip).subscribe(response => {
        localStorage.setItem('ip', this.ip.ipNome);
      }, error => {
        console.log(error);
      });
    }, error => {
      console.log(error);
    });
  }

  public goRedimento(rgh: number): void {
    this.router.navigate(['empregado', rgh]);
  }
}
