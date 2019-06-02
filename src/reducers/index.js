import { combineReducers } from "redux";
import topics from "./topics";
import filters from "./filters";

export default combineReducers({
  topics,
  filters
});
