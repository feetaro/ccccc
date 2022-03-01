import { combineReducers } from "redux";
import countReducer from "./count";
import postsReducer from "./posts";

const rootReducer = combineReducers({
  countReducer: countReducer,
  postsReducer: postsReducer
});

export default rootReducer;
