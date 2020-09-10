import {
  LISTAR_SEGUIMIENTOS,
  LISTAR_SEGUIMIENTOS_EXITO,
  LISTAR_SEGUIMIENTOS_ERROR,
} from "../types";

//Cada reducer tiene su propio state
const initialState = {
  seguimientos: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_SEGUIMIENTOS:
      return {
        ...state,
        loading: action.payload,
      };

    case LISTAR_SEGUIMIENTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        seguimientos: action.payload,
      };

    case LISTAR_SEGUIMIENTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
