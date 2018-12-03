import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts/highstock';
import Annotations from 'highcharts/modules/annotations';
import { ComponentsInteractionService } from '../../services/interaction/components-interaction.service';
import {MarketData} from '../data/msciModel';
import {FtseData} from '../data/ftseModel';


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
 eventDetail: String;
 eventDescription: String;
 myChart: any;
 chartPlot: any;

 hideChart1 = false;
 hideChart2 = true;

 plotname: any = ['GGL'];

  constructor(private interaction: ComponentsInteractionService) {
    this.interaction.passedValue$.subscribe(
        value => {
          this.eventDetail = value;
        });
  }

  ngOnInit() {
    this.chartPlot = [{
      name: 'AAPL',
      data:  this.stockMsci,
      // tooltip: {
      //     valueDecimals: 2
      // }
    }];
    this.plotChart(this.chartPlot);
    if (this.eventDetail === 'Global Recession') {
    // tslint:disable-next-line:max-line-length
    this.eventDescription = 'The Great Recession was related to the financial crisis of 2007–08 and U.S. subprime mortgage crisis of 2007–09. The Great Recession resulted in the scarcity of valuable assets in the market economy and the collapse of the financial sector (banks) in the world economy. The banks were then bailed out by the U.S. government';
    } else if (this.eventDetail === 'Euro debt Crisis') {
    // tslint:disable-next-line:max-line-length
    this.eventDescription = 'The European debt crisis is a multi-year debt crisis that has been taking place in the European Union since the end of 2009. Several eurozone member states (Greece, Portugal, Ireland, Spain and Cyprus) were unable to repay or refinance their government debt or to bail out over-indebted banks under their national supervision without the assistance of third parties like other Eurozone countries, the European Central Bank (ECB), or the International Monetary Fund (IMF)';
    } else {
    // tslint:disable-next-line:max-line-length
    this.eventDescription = 'Brexit is the prospective withdrawal of the United Kingdom from the European Union. In a referendum on 23 June 2016, 51.9% of the participating UK electorate voted to leave the EU, out of a turnout of 72.2%';
    }
  }

  addcompare() {
    console.log('button cloecked');
    const newChart = {
      name: 'GGN',
      data: this.ftseData,
      // tooltip: {
      //   valueDecimals: 2
      //  }
    };
    this.chartPlot.push(newChart);
    console.log(this.chartPlot);
    this.plotChart(this.chartPlot);
  }

plotChart(plotDatal): void {
// Now create the chart

const myChart = Highcharts.stockChart('container', {
    chart: {
      type: 'line'
    },
    rangeSelector: {
        selected: 0,
    },

    title: {
        text: 'AAPL Stock Price'
    },
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
    series: plotDatal
});
}
  onSelect(userSelect: string): void {
      if (userSelect === 'msci') {
        this.chartPlot = [{
          name: 'AAPL',
          data:  this.stockMsci,
          // tooltip: {
          //     valueDecimals: 2
          // }
        }];
        this.plotChart(this.chartPlot);
      } else if (userSelect === 'gold') {
        //this.plotChart(this.ftseData, this.plotname, 'Gold Rate in £');
      } else {
        //this.plotChart(this.commodityOil, this.plotname, 'Crude Oil Rate in £');
      }
}

// tslint:disable-next-line:member-ordering
public stockMsci = MarketData.msciData;
// tslint:disable-next-line:member-ordering
public ftseData = FtseData.ftseData;
  // tslint:disable-next-line:member-ordering
  public commodityOil = [];
}
