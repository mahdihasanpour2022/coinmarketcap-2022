const initialCoins = {
  coinsSortByRank: localStorage.getItem("coinsSortByRank") ? JSON.parse(localStorage.getItem("coinsSortByRank")) : [],
  loading: false,
  error: null,
  coinsSortById:localStorage.getItem("coinsSortById") ? JSON.parse(localStorage.getItem("coinsSortById")) : [], 

};

const coinsReducer = (state = initialCoins, action) => {
  switch (action.type) {
    case "ADD_COINS":
      return { ...state, coinsSortByRank: action.payload };
    case "LOADING_COINS":
      return { ...state, loading: action.payload };
    case "ERRORS_COINS":
      return { ...state, error: action.payload };
    case "SORT_BY_ID":
      return { ...state, coinsSortById: action.payload };
    default:
      return state;
  }
}

export default coinsReducer;
