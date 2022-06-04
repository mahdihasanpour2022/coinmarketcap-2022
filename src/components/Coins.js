import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Coin from "../components/Coin";
// action creator 
import { fetchCoinsSortByRank, fetchCoinsSortById } from '../redux/coins/coinAC';
// scss 
import Styles from "../assets/styles/components_styles/Coins.module.scss";


const Coins = () => {

  const dispatch = useDispatch();
  const {coinsSortById, coinsSortByRank, error, loading } = useSelector(state => state.coinsState)

  useEffect(() => {
    dispatch(fetchCoinsSortByRank())
  }, [dispatch])

  const selectHandler = e => {
    const selectValue = e.target.value;
    if (selectValue === "id") {
      dispatch(fetchCoinsSortById())
    }
  }

  return (
    <>
      {
        !!loading ? <p>loading coins...</p> :
          !!error ? <p>{error}</p> :
            !!coinsSortByRank.length &&
            <div className="container">
              <div className="row my-3">
                <div className="col-12">
                  <select onChange={e => selectHandler(e)} className={Styles.select}>
                    <option value="rank" defaultValue>Rank</option>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="market_cap">Market Cap</option>
                    <option value="percent_change_1h">percent_change_1h</option>
                    <option value="percent_change_7d">percent_change_7d</option>
                    <option value="percent_change_24h">percent_change_24h</option>
                  </select>
                </div>
              </div>
              <div className={`${Styles.coins}`}>
                {coinsSortByRank.map(item => <Coin key={item.name} coin={item} />)}
              </div>
            </div>
      }
    </>
  );
};

export default Coins;