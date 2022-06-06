import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";



const LineChart = () => {

  const { coins } = useSelector(state => state.coinsState);

  const [data, setData] = useState([]);

  useEffect(() => {
    let coinsPrice1and2 = coins.filter(item => item.price_change_24h > 0.4 && item.price_change_24h < 100);
    coinsPrice1and2 = coinsPrice1and2.slice(0, 12);
    const finalResult = coinsPrice1and2.map(coin =>{
      return { name: coin.name, price: coin.price_change_24h };
    })
    setData(finalResult)

  }, [coins])

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
            colors: ['green'],
            dataLabels: {
              enabled: false
            },
            // forecastDataPoints: {
            //   count: 5
            // },
            stroke: {
              width: 2,
              curve: 'smooth',
              // curve: 'straight',
              // dashArray: [4],
            },
            title: {
              text: 'high_24h',
              align: 'left',
              style: {
                fontSize: "16px",
                fontWeight: "100",
                color: 'darkgray',
              }
            },
            // subtitle: {
            //   text: 'hiest price in 24h',
            //   align: 'left',
            //   style: {
            //     fontSize: "12px",
            //     fontWeight: "100",
            //     color: 'darkgray',
            //   }
            // },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
              },
            },
            legend: {

            },
            markers: {
              size: 3,
              hover: {
                sizeOffset: 7
              }
            },
            tooltip: {
              theme: 'dark',
              x: {
                show: true,
              },
              y: {
                title: {
                  formatter: function () {
                    return ''
                  }
                }
              }
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.3,
              },
            },
            xaxis: {
              categories: data.map(item => item.name),
            }
          }}
          series={[{
            name: "coins",
            data: data.map(item => item.price),
          }]}
          type="line"
          height={350}
        />
      }
    </>
  );
};

export default React.memo(LineChart);