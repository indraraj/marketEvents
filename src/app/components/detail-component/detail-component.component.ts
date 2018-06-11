import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { ComponentsInteractionService } from '../../services/interaction/components-interaction.service';

// import annotations from 'highcharts';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
 eventDetail: String;   
 myChart: any;
 hideChart1 = false;
 hideChart2 = true;
  constructor(private interaction : ComponentsInteractionService) {
    this.interaction.passedValue$.subscribe(
        value => {
          this.eventDetail = value;
          console.log(value);
        });
  }

  ngOnInit() {
    this.plotChart(this.stockMsci, 'MSCI All-Country World Equity Index');
  }
plotChart(plotData, plotTitle): void {
// Now create the chart

const myChart = Highcharts.chart('container', {

  chart: {
      type: 'area',
      zoomType: 'xy',
      panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
          minWidth: 600
      }
  },
  credits: {
      enabled: false
   },
  title: {
      text: plotTitle
  },

//   subtitle: {
//       text: '(MIWD00000PUS)'
//   },

  annotations: [{
    labelOptions: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        verticalAlign: 'top',
        y: 15
    },
    labels: [{
        point: {
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2012, 7, 9),
            y: 309.48
        },
        text: 'Arbois'
    }]
}, {
    labelOptions: {
        shape: 'connector',
        align: 'right',
        justify: false,
        crop: true,
        style: {
            fontSize: '0.8em',
            textOutline: '1px white'
        }
    },
    labels: [{
        point: {
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2012, 7, 9),
            y: 309.48
        },
        text: '6.1 km climb<br>4.6% on avg.'
    }]
}],

  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
    month: '%b \'%y',
    year: '%Y'
    },
    title: {
        text: 'Date'
    }
  },

  yAxis: {
      startOnTick: true,
      endOnTick: false,
      maxPadding: 0.35,
      title: {
          text: null
      },
      labels: {
          format: '{value}'
      }
  },

  tooltip: {
      headerFormat: 'MSCI World Equity Index:<br>',
      pointFormat: '{point.x:%b \'%y} : {point.y}',
      shared: true
  },

  legend: {
      enabled: false
  },

  series: [{
      data: plotData,
      lineColor: Highcharts.getOptions().colors[1],
      color: Highcharts.getOptions().colors[2],
      fillOpacity: 0.5,
      name: 'Elevation',
      marker: {
          enabled: false
      },
      threshold: null
  }]

});
}
  onSelect(userSelect: string): void {
      if (userSelect === 'msci') {
        this.plotChart(this.stockMsci, 'MSCI All-Country World Equity Index');
      } else if(userSelect === 'gold'){
        this.plotChart(this.commodityGold, 'Gold rate in Euro');
      }else {
        this.plotChart(this.commodityOil, 'Crude Oil rate in Euro');
      }
}

// tslint:disable-next-line:member-ordering
public stockMsci = [
  [Date.UTC(2012, 7, 9), 309.48],
  [Date.UTC(2012, 8, 9), 323.16],
  [Date.UTC(2012, 9, 9), 331.76],
  [Date.UTC(2012, 10, 9), 331.76],
  [Date.UTC(2012, 11, 9), 323.25],
  [Date.UTC(2012, 12, 9), 335],
  [Date.UTC(2013, 1, 9), 346.82],
  [Date.UTC(2013, 2, 9), 355.86],
  [Date.UTC(2013, 3, 9), 361.34],
  [Date.UTC(2013, 4, 9), 358.92],
  [Date.UTC(2013, 5, 9), 374.64],
  [Date.UTC(2013, 6, 9), 365.92],
  [Date.UTC(2013, 7, 9), 362.61],
  [Date.UTC(2013, 8, 9), 376.83],
  [Date.UTC(2013, 9, 9), 375.37],
  [Date.UTC(2013, 10, 9), 377.59],
  [Date.UTC(2013, 11, 9), 393.98],
  [Date.UTC(2013, 12, 9), 399.43],
  [Date.UTC(2014, 1, 9), 403.06],
  [Date.UTC(2014, 2, 9), 394.88],
  [Date.UTC(2014, 3, 9), 409.88],
  [Date.UTC(2014, 4, 9), 412.22],
  [Date.UTC(2014, 5, 9), 413.64],
  [Date.UTC(2014, 6, 9), 427.04],
  [Date.UTC(2014, 7, 9), 429.78],
  [Date.UTC(2014, 8, 9), 416.94],
  [Date.UTC(2014, 9, 9), 428.14],
  [Date.UTC(2014, 10, 9), 407.02],
  [Date.UTC(2014, 11, 9), 420.06],
  [Date.UTC(2014, 12, 9), 420.22],
  [Date.UTC(2015, 1, 9), 411.69],
  [Date.UTC(2015, 2, 9), 418.86],
  [Date.UTC(2015, 3, 9), 424.29],
  [Date.UTC(2015, 4, 9), 434],
  [Date.UTC(2015, 5, 9), 439.28],
  [Date.UTC(2015, 6, 9), 426.95],
  [Date.UTC(2015, 7, 9), 417.12],
  [Date.UTC(2015, 8, 9), 426.35],
  [Date.UTC(2015, 9, 9), 392.64],
  [Date.UTC(2015, 10, 9), 404.81],
  [Date.UTC(2015, 11, 9), 407.93],
  [Date.UTC(2015, 12, 9), 399.76],
  [Date.UTC(2016, 1, 9), 374.75],
  [Date.UTC(2016, 2, 9), 358.46],
  [Date.UTC(2016, 3, 9), 385.1],
  [Date.UTC(2016, 4, 9), 393.83],
  [Date.UTC(2016, 5, 9), 395.36],
  [Date.UTC(2016, 6, 9), 407.1],
  [Date.UTC(2016, 7, 9), 400.99],
  [Date.UTC(2016, 8, 9), 418.86],
  [Date.UTC(2016, 9, 9), 414.9],
  [Date.UTC(2016, 10, 9), 417.83],
  [Date.UTC(2016, 11, 9), 410.94],
  [Date.UTC(2016, 12, 9), 424.56],
  [Date.UTC(2017, 1, 9), 428.21],
  [Date.UTC(2017, 2, 9), 437.23],
  [Date.UTC(2017, 3, 9), 443.21],
  [Date.UTC(2017, 4, 9), 447.36],
  [Date.UTC(2017, 5, 9), 459.9],
  [Date.UTC(2017, 6, 9), 466.84],
  [Date.UTC(2017, 7, 9), 465.16],
  [Date.UTC(2017, 8, 9), 477.89],
  [Date.UTC(2017, 9, 9), 479.61],
  [Date.UTC(2017, 10, 9), 490.11],
  [Date.UTC(2017, 11, 9), 498.49],
  [Date.UTC(2017, 12, 9), 504.08],
  [Date.UTC(2018, 1, 9), 528.02],
  [Date.UTC(2018, 2, 9), 500.51],
  [Date.UTC(2018, 3, 9), 525.64],
  [Date.UTC(2018, 4, 9), 504.18],
  [Date.UTC(2018, 5, 9), 513.16]
];
public commodityGold = [
    [Date.UTC(2012, 7, 9), 309.48],
    [Date.UTC(2012, 8, 9), 323.16],
    [Date.UTC(2012, 9, 9), 331.76],
    [Date.UTC(2012, 10, 9), 331.76],
    [Date.UTC(2012, 11, 9), 323.25],
    [Date.UTC(2012, 12, 9), 335],
    [Date.UTC(2013, 1, 9), 346.82],
    [Date.UTC(2013, 2, 9), 355.86],
    [Date.UTC(2013, 3, 9), 361.34],
    [Date.UTC(2013, 4, 9), 358.92],
    [Date.UTC(2013, 5, 9), 374.64],
    [Date.UTC(2013, 6, 9), 365.92],
    [Date.UTC(2013, 7, 9), 362.61],
    [Date.UTC(2013, 8, 9), 376.83],
    [Date.UTC(2013, 9, 9), 375.37],
    [Date.UTC(2013, 10, 9), 377.59],
    [Date.UTC(2013, 11, 9), 393.98],
    [Date.UTC(2013, 12, 9), 399.43],
    [Date.UTC(2014, 1, 9), 403.06],
    [Date.UTC(2014, 2, 9), 394.88],
    [Date.UTC(2014, 3, 9), 409.88],
    [Date.UTC(2014, 4, 9), 412.22],
    [Date.UTC(2014, 5, 9), 413.64],
    [Date.UTC(2014, 6, 9), 427.04],
    [Date.UTC(2014, 7, 9), 429.78],
    [Date.UTC(2014, 8, 9), 416.94],
    [Date.UTC(2014, 9, 9), 428.14],
    [Date.UTC(2014, 10, 9), 407.02],
    [Date.UTC(2014, 11, 9), 420.06],
    [Date.UTC(2014, 12, 9), 420.22],
    [Date.UTC(2015, 1, 9), 411.69],
    [Date.UTC(2015, 2, 9), 418.86],
    [Date.UTC(2015, 3, 9), 424.29],
    [Date.UTC(2015, 4, 9), 434],
    [Date.UTC(2015, 5, 9), 439.28],
    [Date.UTC(2015, 6, 9), 426.95],
    [Date.UTC(2015, 7, 9), 417.12],
    [Date.UTC(2015, 8, 9), 426.35],
    [Date.UTC(2015, 9, 9), 392.64],
    [Date.UTC(2015, 10, 9), 404.81],
    [Date.UTC(2015, 11, 9), 407.93],
    [Date.UTC(2015, 12, 9), 399.76],
    [Date.UTC(2016, 1, 9), 374.75],
    [Date.UTC(2016, 2, 9), 358.46],
    [Date.UTC(2016, 3, 9), 385.1],
    [Date.UTC(2016, 4, 9), 393.83],
    [Date.UTC(2016, 5, 9), 395.36],
    [Date.UTC(2016, 6, 9), 407.1],
    [Date.UTC(2016, 7, 9), 400.99],
    [Date.UTC(2016, 8, 9), 418.86],
    [Date.UTC(2016, 9, 9), 414.9],
    [Date.UTC(2016, 10, 9), 417.83],
    [Date.UTC(2016, 11, 9), 410.94],
    [Date.UTC(2016, 12, 9), 424.56],
    [Date.UTC(2017, 1, 9), 428.21],
    [Date.UTC(2017, 2, 9), 437.23],
    [Date.UTC(2017, 3, 9), 443.21],
    [Date.UTC(2017, 4, 9), 447.36],
    [Date.UTC(2017, 5, 9), 459.9],
    [Date.UTC(2017, 6, 9), 466.84],
    [Date.UTC(2017, 7, 9), 465.16],
    [Date.UTC(2017, 8, 9), 477.89],
    [Date.UTC(2017, 9, 9), 479.61],
    [Date.UTC(2017, 10, 9), 490.11],
    [Date.UTC(2017, 11, 9), 498.49],
    [Date.UTC(2017, 12, 9), 504.08],
    [Date.UTC(2018, 1, 9), 528.02],
    [Date.UTC(2018, 2, 9), 500.51],
    [Date.UTC(2018, 3, 9), 525.64],
    [Date.UTC(2018, 4, 9), 504.18],
    [Date.UTC(2018, 5, 9), 513.16]
  ];
  public commodityOil = [
    [Date.UTC(2012, 7, 9), 409.48],
    [Date.UTC(2012, 8, 9), 423.16],
    [Date.UTC(2012, 9, 9), 431.76],
    [Date.UTC(2012, 10, 9), 391.76],
    [Date.UTC(2012, 11, 9), 383.25],
    [Date.UTC(2012, 12, 9), 400.5],
    [Date.UTC(2013, 1, 9), 446.82],
    [Date.UTC(2013, 2, 9), 455.86],
    [Date.UTC(2013, 3, 9), 481.34],
    [Date.UTC(2013, 4, 9), 508.92],
    [Date.UTC(2013, 5, 9), 526.64],
    [Date.UTC(2013, 6, 9), 532.92],
    [Date.UTC(2013, 7, 9), 562.61],
    [Date.UTC(2013, 8, 9), 546.83],
    [Date.UTC(2013, 9, 9), 505.37],
    [Date.UTC(2013, 10, 9), 477.59],
    [Date.UTC(2013, 11, 9), 463.98],
    [Date.UTC(2013, 12, 9), 440.3],
    [Date.UTC(2014, 1, 9), 423.06],
    [Date.UTC(2014, 2, 9), 394.88],
    [Date.UTC(2014, 3, 9), 409.88],
    [Date.UTC(2014, 4, 9), 412.22],
    [Date.UTC(2014, 5, 9), 413.64],
    [Date.UTC(2014, 6, 9), 427.04],
    [Date.UTC(2014, 7, 9), 429.78],
    [Date.UTC(2014, 8, 9), 416.94],
    [Date.UTC(2014, 9, 9), 428.14],
    [Date.UTC(2014, 10, 9), 407.02],
    [Date.UTC(2014, 11, 9), 420.06],
    [Date.UTC(2014, 12, 9), 420.22],
    [Date.UTC(2015, 1, 9), 411.69],
    [Date.UTC(2015, 2, 9), 418.86],
    [Date.UTC(2015, 3, 9), 424.29],
    [Date.UTC(2015, 4, 9), 434],
    [Date.UTC(2015, 5, 9), 439.28],
    [Date.UTC(2015, 6, 9), 426.95],
    [Date.UTC(2015, 7, 9), 417.12],
    [Date.UTC(2015, 8, 9), 426.35],
    [Date.UTC(2015, 9, 9), 392.64],
    [Date.UTC(2015, 10, 9), 404.81],
    [Date.UTC(2015, 11, 9), 407.93],
    [Date.UTC(2015, 12, 9), 399.76],
    [Date.UTC(2016, 1, 9), 374.75],
    [Date.UTC(2016, 2, 9), 358.46],
    [Date.UTC(2016, 3, 9), 385.1],
    [Date.UTC(2016, 4, 9), 393.83],
    [Date.UTC(2016, 5, 9), 395.36],
    [Date.UTC(2016, 6, 9), 407.1],
    [Date.UTC(2016, 7, 9), 400.99],
    [Date.UTC(2016, 8, 9), 418.86],
    [Date.UTC(2016, 9, 9), 414.9],
    [Date.UTC(2016, 10, 9), 417.83],
    [Date.UTC(2016, 11, 9), 410.94],
    [Date.UTC(2016, 12, 9), 424.56],
    [Date.UTC(2017, 1, 9), 428.21],
    [Date.UTC(2017, 2, 9), 437.23],
    [Date.UTC(2017, 3, 9), 443.21],
    [Date.UTC(2017, 4, 9), 447.36],
    [Date.UTC(2017, 5, 9), 459.9],
    [Date.UTC(2017, 6, 9), 520.84],
    [Date.UTC(2017, 7, 9), 465.16],
    [Date.UTC(2017, 8, 9), 477.89],
    [Date.UTC(2017, 9, 9), 579.61],
    [Date.UTC(2017, 10, 9), 490.11],
    [Date.UTC(2017, 11, 9), 498.49],
    [Date.UTC(2017, 12, 9), 504.08],
    [Date.UTC(2018, 1, 9), 600.02],
    [Date.UTC(2018, 2, 9), 580.51],
    [Date.UTC(2018, 3, 9), 625.64],
    [Date.UTC(2018, 4, 9), 604.18],
    [Date.UTC(2018, 5, 9), 613.16]
  ];
}
