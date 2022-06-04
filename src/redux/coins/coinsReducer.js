const initialCoins = {
  coins: localStorage.getItem("coins") ? JSON.parse(localStorage.getItem("coins")) : [],
  loading: false,
  error: null,
};

const coinsReducer = (state = initialCoins, action) => {
  switch (action.type) {
    case "ADD_COINS":
      return { ...state, coins: action.payload };
    case "LOADING_COINS":
      return { ...state, loading: action.payload };
    case "ERRORS_COINS":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default coinsReducer;
