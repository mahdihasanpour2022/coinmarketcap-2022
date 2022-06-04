import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Coin.module.scss";


const Coin = ({ coin }) => {


  // destructuring coin
  const { id, rank, name, quotes: { USD: { percentage_change_24h } } } = coin;

  // console.log(coin)
  return (
    <>
      {!!Object.keys(coin).length &&
        <div className={`${Styles.coinContainer}`}>
          <div className={Styles.coin}>
            <p>{name}</p>
            <p>id:{id}</p>
            <p>rank :{rank}</p>
            {percentage_change_24h !== null &&
              <span className={percentage_change_24h < 0 ? Styles.redSpan : Styles.greenSpan}>{percentage_change_24h.toFixed(2)}</span>
            }
          </div>
        </div>
      }
    </>
  );
};

export default Coin;