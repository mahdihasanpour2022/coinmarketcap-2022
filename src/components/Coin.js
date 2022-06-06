import React, { useState } from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Coin.module.scss";

const Coin = ({ coin }) => {

  const [touched, setTouched] = useState("");
  // destructuring coin
  const { id, rank, name, quotes: { USD: { percent_change_1h, percent_change_24h, percent_change_7d } } } = coin;
  // const { name } = coin;

  const touchHandler = e => {
    setTouched(e.target.innerText);
  }

  console.log(touched)
  return (
    <>
      {!!Object.keys(coin).length &&
        <div className={`${Styles.coinContainer}`} name={name} onClick={e => touchHandler(e)}>
          <div className={Styles.coin}>
            <p>{name}</p>
            {touched === name &&
              <>
                <p>id:{id}</p>
                <p>rank :{rank}</p>
                {percent_change_1h !== null &&
                  <p>1h:<span className={percent_change_1h < 0 ? Styles.redSpan : Styles.greenSpan}>{percent_change_1h.toFixed(2)}</span></p>
                }
                {percent_change_24h !== null &&
                  <p>24h:<span className={percent_change_24h < 0 ? Styles.redSpan : Styles.greenSpan}>{percent_change_24h.toFixed(2)}</span></p>
                }
                {percent_change_7d !== null &&
                  <p>7d:<span className={percent_change_7d < 0 ? Styles.redSpan : Styles.greenSpan}>{percent_change_7d.toFixed(2)}</span></p>
                }
              </>
            }
          </div>
        </div>
      }
    </>
  );
};

export default Coin;