import React from 'react';
// scss 
import {Styles} from "../assets/styles/components_styles/Coin.module.scss";


const Coin = ({coin}) => {


  // destructuring 
  const {name} = coin;
  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default Coin;