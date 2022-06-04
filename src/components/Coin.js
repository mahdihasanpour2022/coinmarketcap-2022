import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Coin.module.scss";


const Coin = ({ coin }) => {


  // destructuring coin
  const { name, rank } = coin;

  console.log(coin)
  return (
    <>
      <div className={`${Styles.coinContainer} col`}>
        <div className={Styles.coin}>
          <p>{name}</p>
          <p>{rank}</p>
        </div>
      </div>
    </>
  );
};

export default Coin;