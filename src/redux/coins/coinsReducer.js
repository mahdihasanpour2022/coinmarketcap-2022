const initialCoins = {
  coinsSortByRank: localStorage.getItem("coinsSortByRank") ? JSON.parse(localStorage.getItem("coinsSortByRank")) : [],
  loading: false,
  error: null,
  coinsSortById: localStorage.getItem("coinsSortById") ? JSON.parse(localStorage.getItem("coinsSortById")) : [],
  coinsSortBychange1h: localStorage.getItem("coinsSortByChange1h") ? JSON.parse(localStorage.getItem("coinsSortByChange1h")) : [],
  coinsSortBychange24h: localStorage.getItem("coinsSortByChange24h") ? JSON.parse(localStorage.getItem("coinsSortByChange24h")) : [],
  coinsSortBychange7d: localStorage.getItem("coinsSortByChange7d") ? JSON.parse(localStorage.getItem("coinsSortByChange7d")) : [],
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
    case "SORT_BY_CHANGE_1H":
      return { ...state, coinsSortBychange1h: action.payload };
    case "SORT_BY_CHANGE_24H":
      return { ...state, coinsSortBychange24h: action.payload };
    case "SORT_BY_CHANGE_7D":
      return { ...state, coinsSortBychange7d: action.payload };
    default:
      return state;
  }
}

export default coinsReducer;
