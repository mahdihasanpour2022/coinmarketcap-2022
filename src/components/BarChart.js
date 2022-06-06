import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
// apexcharts 
import Chart from "react-apexcharts";


const BarChart = () => {

  const { coins } = useSelector(state => state.coinsState,);

  const [data, setData] = useState([])

  useEffect(() => {
    
    let coinsPrice1and2 = coins.filter(item => item.current_price > 1 && item.current_price <3);
    coinsPrice1and2 = coinsPrice1and2.slice(0, 12);
    const finalResult = coinsPrice1and2.map(coin =>{
      return { name: coin.name, price: coin.current_price };
    })
    setData(finalResult)

  }, [coins])

  const series = [{
    name: "coins",
    data: data.map(item => item.price),
  }];

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        // borderRadius: 4,
        horizontal: true,
        // barHeight: '100%',
        distributed: true,
        dataLabels: {
          position: 'left'
        },
      }
    },
    // colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e','#f48024', '#69d2e7'],
    dataLabels: {
      enabled: false,

    },
    title: {
      floating: true,
      text: 'coin price',
      align: 'left',
      style: {
        fontSize: "16px",
        fontWeight: "100",
        color: 'darkgray',
      }
    },
    // subtitle: {
    //   text: 'coins that their price =  >0.5$',
    //   align: 'left',
    //   style: {
    //     fontSize: "12px",
    //     fontWeight: "100",
    //     color: 'darkgray',
    //   }
    // },
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
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: data.map(item => item.name),
    }
  }

  // console.log(coins)
  return (
    <>
      {!!coins.length &&
        <div>
          <Chart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      }
    </>
  );
};

export default React.memo(BarChart);

















