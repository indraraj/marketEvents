import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts/highstock';
import Annotations from 'highcharts/modules/annotations';
import { ComponentsInteractionService } from '../../services/interaction/components-interaction.service';
import { MarketData } from '../data/msciModel';
import { FtseData } from '../data/ftseModel';
import { NikkeiData } from '../data/nikkeiModel';
import { SPData } from '../data/spModel';
import { GoldData } from '../data/goldModel';
import { SilverData } from '../data/silverModel';
import { AluminiumData } from '../data/aluminiumModel';
import { CopperData } from '../data/copperModel';


Annotations(Highcharts);
Highcharts.createElement('link', {
  href: 'https://fonts.googleapis.com/css?family=Unica+One',
  rel: 'stylesheet',
  type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
  public stockMsci = MarketData.msciData;
  public ftseData = FtseData.ftseData;
  public nikkeiData = NikkeiData.nikkeiData;
  public spData = SPData.spData;
  public goldData = GoldData.goldData;
  public silverData = SilverData.silverData;
  public aluminiumData = AluminiumData.aluminiumData;
  public copperData = CopperData.copperData;
  public commodityOil = [];

  public popupArray = [];
  public removeArray = [];

  public myChart: any;
  public eventDetail: String;
  public chartObj: any = [{
    name: 'MSCI',
    data: this.stockMsci
  }];

  /**
   * @constructor
   * @description Seting event value in eventDetail Using the ComponentsInteractionService
   * @param interaction Value passed from incident-component
   */
  constructor(private interaction: ComponentsInteractionService) {
    this.interaction.passedValue$.subscribe(
      value => {
        this.eventDetail = value;
      });
  }

  /**
   * @function ngOnInit
   * @description Called on page refresh
   */
  ngOnInit() {
    this.popupArray.push('FTSE', 'Nikkei', 'S&P');
    this.plotChart(this.chartObj);
  }
  returnColor (i: number): string {
    if (i === 0) {
      return 'lightgreen';
    } else if (i === 2) {
      return 'orange';
    } else {
      return 'purple';
    }
  }
  /**
   * @function addcompare
   * @description Puch the new chart obj in chartObj and calling plotChart
   */
  addcompare(value: string): void {
    let compareObj;
    switch (value) {
      case 'FTSE': {
        this.removeArray.push('FTSE');
        compareObj = {
          name: 'FTSE',
          data: this.ftseData,
          color: 'lightgreen'
        };
         break;
      }
      case 'Nikkei': {
        this.removeArray.push('Nikkei');
        compareObj = {
          name: 'Nikkei',
          data: this.nikkeiData,
          color: 'purple'
        };
         break;
      }
      case 'S&P': {
        this.removeArray.push('S&P');
        compareObj = {
          name: 'S&P',
          data: this.spData,
          color: 'orange'
        };
         break;
      }
      case 'Silver': {
        this.removeArray.push('Silver');
        compareObj = {
          name: 'Silver',
          data: this.silverData,
          color: 'lightgreen'
        };
         break;
      }
      case 'Aluminium': {
        this.removeArray.push('Aluminium');
        compareObj = {
          name: 'Aluminium',
          data: this.aluminiumData,
          color: 'orange'
        };
         break;
      }
      case 'Copper': {
        this.removeArray.push('Copper');
        compareObj = {
          name: 'Copper',
          data: this.copperData,
          color: 'purple'
        };
         break;
      }
      default: {
        compareObj = {
          name: 'FTSE',
          data: this.ftseData
        };
        break;
      }
   }
    this.chartObj.push(compareObj);
    this.plotChart(this.chartObj);
  }

   /**
   * @function removeCompare
   * @description Puch the new chart obj in chartObj and calling plotChart
   */
  removeCompare(value: string): void {
    console.log(this.chartObj);
    const pos = this.chartObj.findIndex(chart => chart.name === value);
    const indx = this.removeArray.findIndex(val => val === value);
    if (pos !== -1) {
      this.chartObj.splice(pos, 1);
      this.removeArray.splice(indx, 1);
    }
    this.plotChart(this.chartObj);
  }

  /**
   * @function plotChart
   * @description Plot the Chart
   * @param plotData chart Object
   */
  plotChart(plotData): void {
    // Now create the chart
    const myChart = Highcharts.stockChart('container', {
      chart: {
        type: 'line'
      },
      rangeSelector: {
        selected: 0,
      },
      // title: {
      //   text: 'MSCI Stock Price'
      // },
      plotOptions: {
        series: {
          compare: 'percent',
          showInNavigator: true
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
      },
      series: plotData
    });
  }

  /**
   * @function onSelect
   * @description Calling function on dropdown selection
   * @param userSelect User selection
   */
  onSelect(userSelect: string): void {
    if (userSelect === 'msci') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('FTSE', 'Nikkei', 'S&P');
      this.chartObj = [{
        name: 'MSCI',
        data: this.stockMsci
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'gold') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('Silver', 'Copper', 'Aluminium');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'Gold',
        data: this.goldData
      }];
      this.plotChart(this.chartObj);
    } else {
      //
    }
    
  }


}
