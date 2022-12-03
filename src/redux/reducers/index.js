import { combineReducers } from "redux";
import { ShopeReducer } from "./shope_reducer";
const reducers = combineReducers({
  shops_red: ShopeReducer
});
export default reducers;
