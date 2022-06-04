import React from 'react';
import { useSelector } from "react-redux";
import Coin from "../components/Coin";

const Coins = () => {

  const {coins,error,loading} = useSelector(state=>state.coinsState)

  return (
    <>
      {!!loading ? <p>loading ...</p> :
      !!error ? <p>{error}</p> :
      coins.map(item => <Coin  key={item.id}/>)
      }
    </>
  );
};

export default Coins;