import { combineReducers } from "redux";
import counterReducers from "./counterReducer";

const rootReducer = combineReducers({counter: counterReducers})

export type reducerType = ReturnType<typeof rootReducer>

export default rootReducer;