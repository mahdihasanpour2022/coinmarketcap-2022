import { getData } from "../../service_api/getdata";
import {save_coins_in_local} from "../../localStorage/localStorages";

const add_coin_AC = (data) => {
  return { type: "ADD_COINS", payload: data }
}

const loading_coin_AC = (data) => {
  return { type: "LOADING_COINS", payload: data }
}

const errors_coin_AC = (data) => {
  return { type: "ERRORS_COINS", payload: data }
}

const fetchCoins = () => {
  return async (dispatch) => {
    try {
      dispatch(loading_coin_AC(true))
      const res = await getData();
      dispatch(loading_coin_AC(false))
      dispatch(add_coin_AC(res))
      dispatch(errors_coin_AC(null))

      save_coins_in_local(res)
    } catch (error) {
      dispatch(loading_coin_AC(false))
      dispatch(add_coin_AC([]))
      dispatch(errors_coin_AC(error.message))
    }
  }
}

export default fetchCoins;

