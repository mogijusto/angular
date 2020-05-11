import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartTooltipItem, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { Color } from '../graph/color';
import { LabelData } from '../graph/label-data';
import { ServidorService } from '../main/_shared/servidor.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  barChartOptions: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          callback: function formatar(valor) {
            const valorFomatado = (valor.toLocaleString());
            return `R$: ${valorFomatado}`;
          }
        }
      }]
    },
    tooltips: {
      borderWidth: 1,
      caretPadding: 15,
      displayColors: false,
      enabled: true,
      intersect: true,
      mode: 'x',
      titleFontColor: '#999',
      titleMarginBottom: 10,
      xPadding: 15,
      yPadding: 15,
      callbacks: {
        label: function (tooltipItem: ChartTooltipItem, data: ChartData) {
          const valor: number = +tooltipItem.value;
          return `Salário: R$ ${valor.toLocaleString()}`;
        }
      }
    }
  };
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins = [];

  barChartData: ChartDataSets[];

  constructor(public servidorService: ServidorService) { }

  ngOnInit(): void {
    const labelData = new LabelData(this.servidorService.getServidores(), 'nome', 'rendimentos');
    this.barChartLabels = labelData.getLabels();
    this.barChartType = 'bar';
    this.barChartLegend = false;

    this.barChartData = [
      {
        data: labelData.getValores(), label: 'Salarios', backgroundColor: new Color().getRandomColor(), hoverBackgroundColor: '#999488',
        hoverBorderColor: '#000',

      }
    ];
  }


}
