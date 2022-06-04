import { combineReducers } from "redux";
import coinsReducer from "./coins/coinsReducer";

const rootReducer = combineReducers({
  coinsState : coinsReducer,
});

export default rootReducer;