import { combineReducers } from "redux";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({noter:noteReducer})

export type reducerType = ReturnType<typeof rootReducer>

export default rootReducer;