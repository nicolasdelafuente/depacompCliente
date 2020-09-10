import { combineReducers } from "redux";
import listarSeguimientosReducer from "./listarSeguimientosReducer";

export default combineReducers({
  seguimientos: listarSeguimientosReducer,
});
