import {
  LISTAR_SEGUIMIENTOS,
  LISTAR_SEGUIMIENTOS_EXITO,
  LISTAR_SEGUIMIENTOS_ERROR,
  OBTENER_SEGUIMIENTO,
} from "../types";

import clienteAxios from "../config/axios";

// FUNCIÓN QUE DESCARGA LOS SEGUIMIENTOS DE LA BASE DE DATOS.
export function listarSeguimientosAction() {
  return async (dispatch) => {
    dispatch(listarSeguimientos());
    try {
      const respuesta = await clienteAxios.get("/seguimientos");
      console.log(respuesta);
      dispatch(listaSeguimientosExito(respuesta.data));
    } catch (error) {
      dispatch(listaSeguimientosError());
      console.log(error);
    }
  };
}

const listarSeguimientos = () => ({
  type: LISTAR_SEGUIMIENTOS,
  payload: true,
});

const listaSeguimientosExito = (seguimientos) => ({
  type: LISTAR_SEGUIMIENTOS_EXITO,
  payload: seguimientos,
});

const listaSeguimientosError = () => ({
  type: LISTAR_SEGUIMIENTOS_ERROR,
  payload: true,
});

// MOSTRAR UN SEGUIMIENTO
export function obtenerSeguimientoAction(seguimiento) {
  return (dispatch) => {
    dispatch(obtenerSeguimiento(seguimiento));
  };
}

const obtenerSeguimiento = (seguimiento) => ({
  type: OBTENER_SEGUIMIENTO,
  payload: seguimiento,
});
