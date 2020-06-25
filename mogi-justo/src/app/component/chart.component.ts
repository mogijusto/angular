import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Color } from '../util/graph/color';
import { LabelData } from '../util/graph/label-data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {


  @Input() barChartOptions: ChartOptions;
  tipo: ChartType;
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  @Input() labelData: LabelData;


  ngOnChanges(changes: SimpleChanges): void {
    if (this.labelData) {
      console.log('changes', this.labelData);
      this.initGrafico();
    }
  }
  ngOnInit(): void {
    if (this.labelData) {
      this.initGrafico();
    }
  }

  initGrafico() {
    this.barChartLabels = this.labelData.getLabels();
    this.barChartType = 'horizontalBar';
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
    this.barChartType = 'horizontalBar';

  }

  mudarGrafico(): void {
    this.barChartType = this.tipo;
  }
}
