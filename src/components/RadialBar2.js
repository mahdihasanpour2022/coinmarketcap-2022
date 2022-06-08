import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
// apexcharts 
import Chart from "react-apexcharts";

const RadialBar2 = () => {

  const { coins } = useSelector(state => state.coinsState,);
  const [highestPrice, sethighestPrice] = useState({});

  useEffect(() => {
    const coinsWithPercent24h = coins.map(item => {
      return { ...item, low_percent: (item.low_24h * 100) / item.low_24h - 100 }
    })
    const biggestPercent = Math.min(...coinsWithPercent24h.map(item => item.low_percent));
    const findHighestPrice = coinsWithPercent24h.filter(item => item.low_percent === biggestPercent)
    sethighestPrice(...findHighestPrice)
  }, [coins])

  return (
    <>
      {!!coins.length &&
        <div >
          <Chart
            series={!!Object.keys(highestPrice).length ? [parseInt(highestPrice.low_percent)] : [15]}
            options={{
              chart: {
                height: 350,
                type: 'radialBar',
                offsetY: 20
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '70%',
                  },
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '20px',
                      color: "darkgray",
                      offsetY: 120
                    },
                    value: {
                      fontWeight: "900",
                      offsetY: -5,
                      fontSize: '25px',
                      color: "#FF8077",
                      formatter: function (val) {
                        return val + "%";
                      }
                    },
                  }
                },

              },
              fill: {
                // type: 'gradient',
                gradient: {
                  shade: 'dark',
                  shadeIntensity: 0.15,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 2,
              },
              colors: ['#FF8077'],
              labels: [!!Object.keys(highestPrice).length ? highestPrice.name : "undifined"],
            }}
            type="radialBar"
            height={350}
          />
          <img style={{width:"30px",height:"30px",objectFit:"contain"}} src={highestPrice.image} alt="" />
          <h5 style={{ color: "black", opacity: "0.55", fontWeight: "600", margin: "0" }}>{highestPrice.name}</h5>
          <p style={{ color: "darkgray" }} >The highest price growth in the last 24 hours</p>
        </div>
      }
    </>
  );
};

export default RadialBar2;