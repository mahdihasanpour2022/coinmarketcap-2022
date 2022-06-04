import React from 'react';

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