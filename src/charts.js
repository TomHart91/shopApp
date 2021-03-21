import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('dotenv').config();

const options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Sales'
    },
    series: [
      {
        data: [1, 2 ],
            
      }
        ],
    xAxis: {
        categories:["Red Dead Redemption Two", "Folklore"]
    }
    
  };

  const Charts = () => (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );

  export default Charts;