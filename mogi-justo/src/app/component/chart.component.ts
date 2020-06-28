import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
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
  tipo: ChartType = 'bar';
  barChartLabels: Label[];
  barChartType: ChartType;
  barChartLegend: boolean;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  @Input() labelData: LabelData;

  constructor(private df: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.labelData) {
      console.log('changes', changes);
      this.initGrafico();
      this.df.detectChanges();
    }
  }
  ngOnInit(): void {

  }

  initGrafico() {
    this.barChartLabels = this.labelData.getLabels().splice(0, 20);
    this.barChartType = 'horizontalBar';
    this.barChartLegend = false;

    this.barChartData = [
      {
        data: this.labelData.getValores().splice(0, 20),
        label: 'Salarios',
        backgroundColor: new Color().getRandomColor(),
        hoverBackgroundColor: '#999488',
        hoverBorderColor: '#000',
      }
    ];
    this.mudarGrafico();

  }

  mudarGrafico(): void {
    this.barChartType = this.tipo;
  }
}
