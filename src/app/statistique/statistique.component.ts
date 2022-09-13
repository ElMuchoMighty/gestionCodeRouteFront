import { Component, OnInit } from '@angular/core';
import { ChartType, LegendItem } from 'app/lbd/lbd-chart/lbd-chart.component';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution des inscrits et taux de réussite en fonction des années'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Candidat',
      data: [1, 3, 10, 34, 45, 42, 100]
  }, {
      name: 'Taux de réussite-Ecole en %',
      data: [100, 95, 90, 94, 88, 95, 99]
  }]
  }

  public options1: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution des inscrits et taux de réussite en fonction des années'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Candidat',
      data: [1, 3, 10, 34, 45, 42, 100]
  }, {
      name: 'Taux de réussite-Ecole en %',
      data: [100, 95, 90, 94, 88, 95, 99]
  }]
  }
  constructor() { }
  ngOnInit() {
  }

  admin (){

  }

  candidat(){
    
  }
}
