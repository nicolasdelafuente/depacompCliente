import {
  CREAR_SEGUIMIENTO,
  CREAR_SEGUIMIENTO_EXITO,
  CREAR_SEGUIMIENTO_ERROR,
  LISTAR_SEGUIMIENTOS,
  LISTAR_SEGUIMIENTOS_EXITO,
  LISTAR_SEGUIMIENTOS_ERROR,
} from "../types";

import clienteAxios from "../config/axios";

// FUNCIÓN QUE CREA UN SEGUIMIENTO
export function crearSeguimientoActions(seguimiento) {
  return async (dispatch) => {
    dispatch(crearSeguimiento());

    try {
      // insertar en la API
      await clienteAxios.post("/seguimientos", seguimiento);
      //Si todo sale Buen, actualizo state
      dispatch(crearSeguimientoExito(seguimiento));
      console.log(seguimiento);
    } catch (error) {
      console.log(error);
      // si hay un error cambiar el state
      dispatch(crearSeguimientoError(true));
    }
  };
}

const crearSeguimiento = () => ({
  type: CREAR_SEGUIMIENTO,
  payload: true,
});

// si el Seguimiento se guarda en la base de datos
const crearSeguimientoExito = (Seguimiento) => ({
  type: CREAR_SEGUIMIENTO_EXITO,
  payload: Seguimiento,
});

// si hubo un error
const crearSeguimientoError = (estado) => ({
  type: CREAR_SEGUIMIENTO_ERROR,
  payload: estado,
});

// FUNCIÓN QUE DESCARGA LOS SEGUIMIENTOS DE LA BASE DE DATOS.
export function listarSeguimientosAction() {
  return async (dispatch) => {
    dispatch(listarSeguimientos());

    try {
      const respuesta = await clienteAxios.get("/seguimientos");
      dispatch(listaSeguimientosExito(respuesta.data.data));
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
