// get data 
import { getCoins} from "../../service_api/getdata";
// local storage 
import { save_coins_in_local,} from "../../localStorage/localStorages";

  //  action creators 
const add_coin_sortByRank_AC = (data) => {
  return { type: "ADD_COINS", payload: data };
}

const loading_coin_AC = (data) => {
  return { type: "LOADING_COINS", payload: data };
}

const errors_coin_AC = (data) => {
  return { type: "ERRORS_COINS", payload: data };
}

// fetch coins sort by rank
export const fetchCoinsSortByRank = () => {
  return async (dispatch) => {
    try {
      dispatch(loading_coin_AC(true))
      const res = await getCoins();
      // console.log(res)
      dispatch(loading_coin_AC(false))
      dispatch(add_coin_sortByRank_AC(res))
      dispatch(errors_coin_AC(null))

      save_coins_in_local(res)
    } catch (error) {
      dispatch(loading_coin_AC(false))
      dispatch(add_coin_sortByRank_AC([]))
      dispatch(errors_coin_AC(error.message))
    }
  }
}
