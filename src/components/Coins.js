import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Coin from "../components/Coin";
// scss 
import Styles from "../assets/styles/components_styles/Coins.module.scss";


const Coins = () => {

  const { coins, error, loading } = useSelector(state => state.coinsState)
  const [searched, setSearched] = useState([])

  const searchInputHandler = (e) => {
    const textQuery = e.target.value;
    console.log(coins.filter(item => item.name.toLowerCase().includes(textQuery.toLowerCase())))
    setSearched(coins.filter(item => item.name.toLowerCase().includes(textQuery.toLowerCase())))
  }
  return (
    <>
      {
        !!loading ? <p>loading coins...</p> :
          !!error ? <p>{error}</p> :
            !!coins.length &&

            <div className="container-fluid">

              <div className="row my-3">
                <div className={`${Styles.inputContainer} col-12`}>
                  <input onChange={searchInputHandler} type="text" placeholder='search coins ...' />
                </div>
              </div>

              <div className={`${Styles.coins}`}>
                {!!searched.length ?
                    searched.map(item => <Coin key={item.name} coin={item} />) :
                    coins.map(item => <Coin key={item.name} coin={item} />)
                }
              </div>
            </div>
      }
    </>
  );
};

export default Coins;