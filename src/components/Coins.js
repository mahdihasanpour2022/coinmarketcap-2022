import React from 'react';
import { useSelector } from "react-redux";
import Coin from "../components/Coin";

const Coins = () => {

  const {coins,error,loading} = useSelector(state=>state.coinsState)

  console.log(coins)
  return (
    <>
      {!!loading ? <p>loading ...</p> :
      !!error ? <p>{error}</p> :
      coins.map(item => <Coin key={item.id} coin={item} />)
      }
    </>
  );
};

export default Coins;