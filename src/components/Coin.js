import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Coin.module.scss";


const Coin = ({ coin }) => {


  // destructuring coin
  const { id, rank, name, quotes: { USD: { percent_change_1h,percent_change_24h, percent_change_7d} } } = coin;

  // console.log(coin)
  return (
    <>
      {!!Object.keys(coin).length &&
        <div className={`${Styles.coinContainer}`}>
          <div className={Styles.coin}>
            <p>{name}</p>
            <p>id:{id}</p>
            <p>rank :{rank}</p>
            {percent_change_1h !== null &&
              <span className={percent_change_1h < 0 ? Styles.redSpan : Styles.greenSpan}>1h:{percent_change_1h.toFixed(2)}</span>
            }
             {percent_change_24h !== null &&
              <span className={percent_change_24h < 0 ? Styles.redSpan : Styles.greenSpan}>24h:{percent_change_24h.toFixed(2)}</span>
            }
             {percent_change_7d !== null &&
              <span className={percent_change_7d < 0 ? Styles.redSpan : Styles.greenSpan}>7d:{percent_change_7d.toFixed(2)}</span>
            }
          </div>
        </div>
      }
    </>
  );
};

export default Coin;