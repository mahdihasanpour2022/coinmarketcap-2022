import React from 'react';
import {useSelector} from "react-redux";
import { Line } from 'react-chartjs-2';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

const LineChart = () => {
  const { coinsSortByRank } = useSelector(state => state.coinsState,);

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

   const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
        // position: 'bottom',
        // align:"start",
      },
      title: {
        display: true,
        text: 'change 1h ',
      },
    },
  };


  const data = {
    labels:coinsSortByRank.map(item => item.name) ,
    datasets: [{
      label: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      data: coinsSortByRank.map(item => item.quotes.USD.percent_change_1h),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div>
      <Line 
      options={options} 
      data={data} 
      />
    </div>
  );
};

export default LineChart;