import React from 'react';
import { useSelector } from "react-redux";
import Coin from "../components/Coin";
// scss 
import Styles from "../assets/styles/components_styles/Coins.module.scss";
const Coins = () => {

  const { coins, error, loading } = useSelector(state => state.coinsState)

  return (
    <>
      {!!loading ? <p>loading coins...</p> :
        !!error ? <p>{error}</p> :
          !!coins.length &&
          <div className="container">
            <div className={`${Styles.coins} row m-0 g-5`}>
              {coins.map(item => <Coin key={item.id} coin={item} />)}
            </div>
          </div>
      }
    </>
  );
};

export default Coins;