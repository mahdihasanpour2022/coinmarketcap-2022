import { combineReducers } from "redux";
import coinsReducer from "./coins/coinsReducer";
import menuReducer from "./menu/menuReducer";

const rootReducer = combineReducers({
  coinsState : coinsReducer,
  menuState :menuReducer
});

export default rootReducer;