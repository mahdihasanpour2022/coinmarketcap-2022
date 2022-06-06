import React from 'react';
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";

const LineChart = () => {
  const { coins } = useSelector(state => state.coinsState,);

  return (
    <>
      {!!coins.length &&
        <Chart
          options={{
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              categories: coins.slice(0,10).map(item => item.name),
            }
          }}
          series={[{
            name: "Desktops",
            // data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            data: coins.slice(0,10).map(item => item.high_24h),
          }]}
          type="line"
          height={350}
        />
      }
    </>
  );
};

export default LineChart;