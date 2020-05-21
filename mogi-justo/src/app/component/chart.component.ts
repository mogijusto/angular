import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Color } from '../util/graph/color';
import { LabelData } from '../util/graph/label-data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() barChartOptions: ChartOptions;
  tipo: ChartType;
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  @Input() labelData: LabelData;



  ngOnInit(): void {

    this.barChartLabels = this.labelData.getLabels();
    this.barChartType = 'bar';
    this.barChartLegend = false;

    this.barChartData = [
      {
        data: this.labelData.getValores(),
        label: 'Salarios',
        backgroundColor: new Color().getRandomColor(),
        hoverBackgroundColor: '#999488',
        hoverBorderColor: '#000',

      }
    ];
  }

  mudarGrafico(): void {
    this.barChartType = this.tipo;
  }
}
