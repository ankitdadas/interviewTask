import React from "react";
import PieChartcom from 'react-apexcharts';



class PieChart extends React.Component {
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
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
          position: 'bottom'
        }
        
      },
    
    
    };
  }


  render() {
    return (
       
          <PieChartcom options={this.state.options} series={this.state.series} type="pie" />
        
    );
  }
}


export default PieChart;