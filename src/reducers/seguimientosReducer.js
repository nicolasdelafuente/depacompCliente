import {
  LISTAR_SEGUIMIENTOS,
  LISTAR_SEGUIMIENTOS_EXITO,
  LISTAR_SEGUIMIENTOS_ERROR,
  OBTENER_SEGUIMIENTO,
} from "../types";

//Cada reducer tiene su propio state
const initialState = {
  seguimientos: [],
  error: null,
  loading: false,
  seguimientoMostrar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    //LISTAR
    case LISTAR_SEGUIMIENTOS:
      return {
        ...state,
        loading: action.payload,
      };

    case LISTAR_SEGUIMIENTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        seguimientos: action.payload,
      };
    case LISTAR_SEGUIMIENTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_SEGUIMIENTO:
      return {
        ...state,
        seguimientoMostrar: action.payload,
      };

    default:
      return state;
  }
}
