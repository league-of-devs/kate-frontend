import { createStore, combineReducers } from "redux";

import User from "./reducers/User";
import Syncs from "./reducers/Syncs";

const rootReducer = combineReducers({ User, Syncs });

export default createStore(rootReducer);