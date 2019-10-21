import { createStore, combineReducers } from "redux";
import launchCollection from "./LaunchCollectionReducer";
import rocketCollection from "./rocketCollectionReducer.js";

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection
});

const store = createStore(rootReducer);

export default store;
