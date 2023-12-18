import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { getData } from '../data';

@Component({
  selector: 'app-statistics-graph',
  templateUrl: './statistics-graph.component.html',
  styleUrls: ['./statistics-graph.component.scss']
})
export class StatisticsGraphComponent implements OnInit {

  moneyStatistics:any = {};
  mixedData:any[] = [];
  public chartOptions: AgChartOptions;
  constructor() { 
    this.chartOptions = {
      data: getData(),
      series: [
          {
              type: 'bar',
              xKey: 'quarter',
              yKey: 'total_income',
              yName: 'Income',
          },
          {
              type: 'bar',
              xKey: 'quarter',
              yKey: 'total_investment',
              yName: 'Investment',
          },
          {
              type: 'bar',
              xKey: 'quarter',
              yKey: 'total_expense',
              yName: 'Expense',
          }
      ],
  };
  }

  ngOnInit(): void {
  }

}
