import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {

  const { coins } = useSelector(state => state.coinsState);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    let biggestMarketCap = coins.filter(item => item.market_cap > 8000000000);
    const finalResult = biggestMarketCap.map(coin => {
      return { name: coin.name, marketCap: coin.market_cap };
    })
    setFilteredCoins(finalResult)

  }, [coins])

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: filteredCoins.map(item => item.name),
    datasets: [
      {
        label: '# of Votes',
        data: filteredCoins.map(item => item.marketCap),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };


  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;






