import { combineReducers } from "redux";

import seguimientosReducer from "./seguimientosReducer";

export default combineReducers({
  seguimientos: seguimientosReducer,
});
