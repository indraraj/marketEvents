// const myChart = Highcharts.chart('container', {

//   chart: {
//     zoomType: 'x'
//   },
//   credits: {
//       enabled: false
//    },
//   title: {
//       text: plotTitle
//   },

// //   subtitle: {
// //       text: '(MIWD00000PUS)'
// //   },

//   annotations: [{
//     labelOptions: {
//         backgroundColor: 'rgba(255,255,255,0.5)',
//         verticalAlign: 'top',
//         y: 15
//     },
//     labels: [{
//         point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: Date.UTC(2015, 12 , 31 ),
//             y: 399.36
//         },
//         text: 'Trump Win'
//     }]
// },
// {
//     labels: [{
//         point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: Date.UTC(2017, 10, 20 ),
//             y: 496.39
//         },
//         text: 'Amazon Buys Whole Foods'
//     }]
// }, {
//     labelOptions: {
//         shape: 'connector',
//         align: 'right',
//         justify: false,
//         crop: true,
//         style: {
//             fontSize: '0.8em',
//             textOutline: '1px white'
//         }
//     },
//     labels: [{
//         point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: Date.UTC(2014, 9 , 18 ),
//             y: 428.84
//         },
//         text: 'Disasters on Malaysian Airlines'
//     }]
// }],
//         // annotations: [{
//         //     labels: [{
//         //         point: { x: Date.UTC(2012, 11, 9), y: 323.25 },
//         //         text: 'Label'
//         //     }]
//         // }],

//   xAxis: {
//     type: 'datetime',
//     title: {
//         text: 'Dates  ------>'
//     }
//   },

//   yAxis: {
//       startOnTick: true,
//       endOnTick: false,
//       maxPadding: 0.35,
//       title: {
//           text: ylabel
//       },
//       labels: {
//           format: '{value}'
//       }
//   },

//   tooltip: {
//       headerFormat: 'MSCI World Equity Index:<br>',
//       pointFormat: '{point.x:%b \'%y} : {point.y}',
//       shared: true
//   },

//   legend: {
//       enabled: false
//   },

//   plotOptions: {
//     area: {
//         fillColor: {
//             linearGradient: {
//                 x1: 0,
//                 y1: 0,
//                 x2: 0,
//                 y2: 1
//             },
//             stops: [
//                 [0, Highcharts.getOptions().colors[0]],
//                 [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//             ]
//         },
//         marker: {
//             radius: 2
//         },
//         lineWidth: 1,
//         states: {
//             hover: {
//                 lineWidth: 1
//             }
//         },
//         threshold: null
//     }
// },

//   series: [{
//       data: plotData,
//       lineColor: Highcharts.getOptions().colors[1],
//       color: Highcharts.getOptions().colors[2],
//       fillOpacity: 0.5,
//       name: 'Elevation',
//       marker: {
//           enabled: false
//       },
//       threshold: null
//   }]

// });