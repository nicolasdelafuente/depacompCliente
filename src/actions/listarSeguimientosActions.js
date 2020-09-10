import {
  LISTAR_SEGUIMIENTOS,
  LISTAR_SEGUIMIENTOS_EXITO,
  LISTAR_SEGUIMIENTOS_ERROR,
} from "../types";

import seguimientoAxios from "../config/axios";

// Función que descarga los seguimientos de la base de datos.

export function listarSeguimientosAction() {
  return async (dispatch) => {
    dispatch(listarSeguimientos());
    try {
      const respuesta = await seguimientoAxios.get("/seguimientos");
      dispatch(listadoSeguimientosExito(respuesta.data));
      console.log(respuesta.data.data);
    } catch (error) {
      console.log(error);
      dispatch(listadoSeguimientosError());
    }
  };
}

const listarSeguimientos = () => ({
  type: LISTAR_SEGUIMIENTOS,
  payload: true,
});

const listadoSeguimientosExito = (seguimientos) => ({
  type: LISTAR_SEGUIMIENTOS_EXITO,
  payload: seguimientos,
});

const listadoSeguimientosError = () => ({
  type: LISTAR_SEGUIMIENTOS_ERROR,
  payload: true,
});
