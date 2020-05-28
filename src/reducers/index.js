import { combineReducers } from "redux";
import restaurants from "./restaurants";
import filter from "./filter";

const rootReducer = combineReducers({
  restaurants,
  filter,
});

export default rootReducer;
