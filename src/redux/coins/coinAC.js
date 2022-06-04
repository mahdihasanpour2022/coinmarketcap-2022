// get data 
import { getCoinsSortByRank, getCoinsSortById, getCoinsSortByChange } from "../../service_api/getdata";
// local storage 
import { save_coinsSortByRank_in_local,
   save_coinsSortById_in_local ,
   save_coinsSortBychange1h_in_local,
   save_coinsSortBychange24h_in_local,
   save_coinsSortBychange7d_in_local} from "../../localStorage/localStorages";

   
const add_coin_sortByRank_AC = (data) => {
  return { type: "ADD_COINS", payload: data };
}

const loading_coin_AC = (data) => {
  return { type: "LOADING_COINS", payload: data };
}

const errors_coin_AC = (data) => {
  return { type: "ERRORS_COINS", payload: data };
}

export const add_coins_sortByID_AC = (data) => {
  return { type: "SORT_BY_ID", payload: data };
}
export const add_coins_sortByChange1h_AC = (data) => {
  return { type: "SORT_BY_CHANGE_1H", payload: data };
}
export const add_coins_sortByChange24h_AC = (data) => {
  return { type: "SORT_BY_CHANGE_24H", payload: data };
}
export const add_coins_sortByChange7d_AC = (data) => {
  return { type: "SORT_BY_CHANGE_7D", payload: data };
}
// fetch coins sort by rank
export const fetchCoinsSortByRank = () => {
  return async (dispatch) => {
    try {
      dispatch(loading_coin_AC(true))
      const res = await getCoinsSortByRank();
      dispatch(loading_coin_AC(false))
      dispatch(add_coin_sortByRank_AC(res))
      dispatch(errors_coin_AC(null))

      save_coinsSortByRank_in_local(res)
    } catch (error) {
      dispatch(loading_coin_AC(false))
      dispatch(add_coin_sortByRank_AC([]))
      dispatch(errors_coin_AC(error.message))
    }
  }
}
// fetch coins sort by id
export const fetchCoinsSortById = () => {

  return async (dispatch) => {
    try {
      dispatch(loading_coin_AC(true))
      const res = await getCoinsSortById();
      dispatch(loading_coin_AC(false))
      dispatch(add_coins_sortByID_AC(res))
      dispatch(errors_coin_AC(null))

      save_coinsSortById_in_local(res)
    } catch (error) {
      dispatch(loading_coin_AC(false))
      dispatch(add_coins_sortByID_AC([]))
      dispatch(errors_coin_AC(error.message))
    }
  }
}
// fetch coins sort by id
export const fetchCoinsSortByChange = () => {
  return async (dispatch) => {
    try {
      dispatch(loading_coin_AC(true))
      const res = await getCoinsSortByChange();
      // console.log(res)
      dispatch(loading_coin_AC(false))
      dispatch(add_coins_sortByChange1h_AC(res[0].data.data));
      save_coinsSortBychange1h_in_local(res[0].data.data)
      dispatch(add_coins_sortByChange24h_AC(res[0].data.data));
      save_coinsSortBychange24h_in_local(res[0].data.data)
      dispatch(add_coins_sortByChange7d_AC(res[1].data.data));
      save_coinsSortBychange7d_in_local(res[2].data.data)
      dispatch(errors_coin_AC(null))

      save_coinsSortById_in_local(res)
    } catch (error) {
      dispatch(loading_coin_AC(false))
      dispatch(add_coins_sortByID_AC([]))
      dispatch(errors_coin_AC(error.message))
    }
  }
}

