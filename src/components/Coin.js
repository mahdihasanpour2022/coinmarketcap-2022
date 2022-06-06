import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Coin.module.scss";

const Coin = ({ coin }) => {

  const { name ,image,id} = coin;

  const shorten1 =(data)=>{
    return data.split(" ").slice(0,1).join("");
  }
  return (
    <>
      {!!Object.keys(coin).length &&
        <div className={`${Styles.coinContainer}`} name={name}>
          <div className={Styles.coin}>
            <img src={image} alt={id} />
            <p>{shorten1(name)}</p>
          </div>
        </div>
      }
    </>
  );
};

export default Coin;