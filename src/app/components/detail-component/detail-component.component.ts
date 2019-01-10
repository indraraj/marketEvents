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
import { EuroData } from '../data/Euro';
import { ChinaData } from '../data/china';
import { Fid1Data } from '../data/Fid1';
import { Fid2Data } from '../data/Fid2';



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
  public topixData = MarketData.msciData;
  public ftseData = FtseData.ftseData;
  public nikkeiData = NikkeiData.nikkeiData;
  public dowJone = SPData.spData;
  public goldData = GoldData.goldData;
  public silverData = SilverData.silverData;
  public aluminiumData = AluminiumData.aluminiumData;
  public copperData = CopperData.copperData;
  public euroData = EuroData.euroData;
  public chinaData = ChinaData.chinaData;
  public fid1Data = Fid1Data.fid1Data;
  public fid2Data = Fid2Data.fid2Data;

  public commodityOil = [];
  public chartHeight;

  public popupArray = [];
  public removeArray = [];

  public myChart: any;
  public eventDetail: String;
  public chartObj: any = [{
    name: 'Nikkei 225',
    data: this.nikkeiData,
    id: 'dataseries'
  // the event marker flags
}, {
  type: 'flags',
  data: [{
    x: Date.UTC(2017, 6 , 24 ),
    title: 'E',
    text: 'Result of the 2016 United Kingdom European Union member referendum'
  }, {
    x: Date.UTC(2017, 11 , 19),
    title: 'E',
    text: 'The Federal funds rate was lowered to zero percent.'
  }, {
    x: Date.UTC(2017, 10 , 15),
    title: 'E',
    text: 'Lehman Brothers Went Bankrupt after the Federal Reserve declined to gurantee its loans'
  }],
  color: Highcharts.getOptions().colors[0], // same as onSeries
  fillColor: Highcharts.getOptions().colors[0],
  onSeries: 'dataseries',
  width: 16,
  style: { // text style
    color: 'white'
  },
  states: {
    hover: {
      fillColor: '#395C84' // darker
    }
  }
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
    this.popupArray.push('FTSE', 'Dow', 'Topix');
    this.plotChart(this.chartObj);
    this.chartHeight = document.getElementById('chartContainer').clientHeight + 'px';
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
      case 'Dow': {
        this.removeArray.push('Dow');
        compareObj = {
          name: 'Dow',
          data: this.dowJone,
          color: 'purple'
        };
         break;
      }
      case 'Topix': {
        this.removeArray.push('Topix');
        compareObj = {
          name: 'Topix',
          data: this.topixData,
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
      case 'Eurozone GEAR': {
        this.removeArray.push('Eurozone GEAR');
        compareObj = {
          name: 'Eurozone GEAR',
          data: this.euroData,
          color: 'lightgreen'
        };
         break;
      }
      case 'China GEAR': {
        this.removeArray.push('China GEAR');
        compareObj = {
          name: 'China GEAR',
          data: this.chinaData,
          color: 'lightgreen'
        };
         break;
      }
      case 'FIJ IT JAPAN GROWTH FUND': {
        this.removeArray.push('FIJ IT JAPAN GROWTH FUND');
        compareObj = {
          name: 'FIJ IT JAPAN GROWTH FUND',
          data: this.fid1Data,
          color: 'lightgreen'
        };
         break;
      }
      case 'FIJ IT US High Yield Fund': {
        this.removeArray.push('FIJ IT US High Yield Fund');
        compareObj = {
          name: 'FIJ IT US High Yield Fund',
          data: this.fid2Data,
          color: 'lightgreen'
        };
         break;
      }
      case 'Gold': {
        this.removeArray.push('Gold');
        compareObj = {
          name: 'Gold',
          data: this.goldData,
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
        type: 'line',
        height: '50%'
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
        style: {
          width: '200px'
        },
        valueDecimals: 4,
        shared: true
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
    if (userSelect === 'nikkei') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('FTSE', 'Dow', 'Topix');
      this.chartObj = [{
        name: 'Nikkei 225',
        data: this.nikkeiData
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'topix') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('FTSE', 'Nikkei', 'Dow');
      this.chartObj = [{
        name: 'Topix',
        data: this.topixData
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'dow') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('FTSE', 'Nikkei', 'Topix');
      this.chartObj = [{
        name: 'Dow',
        data: this.dowJone
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'ftse') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('Dow', 'Nikkei', 'Topix');
      this.chartObj = [{
        name: 'FTSE',
        data: this.ftseData
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
    }  else if (userSelect === 'silver') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('Gold', 'Copper', 'Aluminium');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'Silver',
        data: this.silverData
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'copper') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('Gold', 'Silver', 'Aluminium');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'Copper',
        data: this.copperData
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'aluminium') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('Gold', 'Silver', 'Copper');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'Aluminium',
        data: this.aluminiumData
      }];
      this.plotChart(this.chartObj);
    }    else if (userSelect === 'euro') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('China GEAR');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'Eurozone GEAR',
        data: this.euroData
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'china') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('Eurozone GEAR');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'China GEAR',
        data: this.chinaData
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'fid1') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('FIJ IT US High Yield Fund');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'FIJ IT JAPAN GROWTH FUND',
        data: this.fid1Data
      }];
      this.plotChart(this.chartObj);
    } else if (userSelect === 'fid2') {
      this.popupArray = [];
      this.removeArray = [];
      this.popupArray.push('FIJ IT JAPAN GROWTH FUND');
      console.log(this.popupArray[1]);
      this.chartObj = [{
        name: 'FIJ IT US High Yield Fund',
        data: this.fid2Data
      }];
      this.plotChart(this.chartObj);
    } else {
      //
    }
  }


}
