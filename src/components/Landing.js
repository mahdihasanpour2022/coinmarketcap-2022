import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchCoins from '../redux/coins/coinAC';
import Coins from "../components/Coins";

const Landing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return (
    <>
      <Coins />
    </>
  );
};

export default Landing;