import React from "react";
import Chart from 'react-apexcharts';

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Equity',
        data: [32.19],
        color:"#75D6FF"
      },
      {
        name: 'Bond',
        data: [26.40],
        color:"#75FFFF"
      },
      {
        name: 'Gold',
        data: [26.40],
        color:"#AA75FF"
      },{
        name: 'Govt. Securities',
        data: [26.40],
        color:"#FFC46A"
      }

    
    ],
      options: {
        chart: {
          type: 'bar',
          height: 50,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              total: {
                enabled: false,
                //offsetX: 0,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        // title: {
        //   text: 'Fiction Books Sales'
        // },
        xaxis: {
        //  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
          labels: {
            // formatter: function (val) {
            //   return val + "K"
            // }
          }
        },
        // yaxis: {
        //   title: {
        //     text: undefined
        //   },
        // },
        tooltip: {
          y: {
            // formatter: function (val) {
            //   return val + "K"
            // }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
          offsetX: 40
        }
      },
    
    
    };
  }



  render() {
    return (
      
          <Chart options={this.state.options} series={this.state.series} type="bar" height={150} />
        
    );
  }
}

 
export default BarChart;
