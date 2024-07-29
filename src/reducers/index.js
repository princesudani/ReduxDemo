import changenumber from "./plusminus";
import othernumber from "./multdiv"

import { combineReducers } from "redux";


const rootReducer = combineReducers({
    changenumber, othernumber
})

export default rootReducer;