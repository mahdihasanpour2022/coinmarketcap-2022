import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Coin from "../components/Coin";
// action creator 
import { fetchCoinsSortByRank, fetchCoinsSortById ,fetchCoinsSortByChange} from '../redux/coins/coinAC';
// scss 
import Styles from "../assets/styles/components_styles/Coins.module.scss";


const Coins = () => {

  const [valuee,setValuee] = useState("rank");
  const dispatch = useDispatch();
  const { coinsSortById, coinsSortByRank,coinsSortBychange1h,coinsSortBychange24h,coinsSortBychange7d, error, loading } = useSelector(state => state.coinsState)

  const [array, setArray] = useState(coinsSortByRank);

  useEffect(() => {
    dispatch(fetchCoinsSortByRank());
  }, [dispatch])

  const selectHandler = e => {
    const selectValue = e.target.value;
    setValuee(selectValue)


    if (selectValue === "id") {
      dispatch(fetchCoinsSortById())
      setArray(coinsSortById)
    }else if (selectValue === "rank"){
      dispatch(fetchCoinsSortByRank())
      setArray(coinsSortByRank)
    }else if (selectValue === "percent_change_1h"){
      dispatch(fetchCoinsSortByChange())
      setArray(coinsSortBychange1h)
    }else if(selectValue === "percent_change_24h"){
      dispatch(fetchCoinsSortByChange())
      setArray(coinsSortBychange24h)
    }else if(selectValue === "percent_change_7d"){
      dispatch(fetchCoinsSortByChange())
      setArray(coinsSortBychange7d)
    }else{
      setArray(coinsSortByRank)
    }
  }

  // console.log(coinsSortBychange1h)
  // console.log(array)
  return (
    <>
      {
        !!loading ? <p>loading coins...</p> :
          !!error ? <p>{error}</p> :
            !!coinsSortByRank.length &&

            <div className="container">

              <div className="row my-3">
                <div className={`${Styles.selectContainer} col-12`}>
                  <select value={valuee} onChange={e => selectHandler(e)} className={Styles.select}>
                    <option value="rank">Rank</option>
                    <option value="id">ID</option>
                    <option value="percent_change_1h">percent_change_1h</option>
                    <option value="percent_change_24h">percent_change_24h</option>
                    <option value="percent_change_7d">percent_change_7d</option>
                  </select>
                </div>
              </div>

              <div className={`${Styles.coins}`}>
                {array.map(item => <Coin key={item.name} coin={item} />)}
              </div>
            </div>
      }
    </>
  );
};

export default Coins;