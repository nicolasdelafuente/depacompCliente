import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { obtenerSeguimientoAction } from "../actions/seguimientoActions";

const EntrevistaFila = ({ seguimiento }) => {
  const {
    seguimiento_id,
    estado_id,
    entrevista_id,
    categoria_id,
    tipo_seguimiento_id,
    persona_id,
  } = seguimiento;

  const history = useHistory(); // Haboilitar history para redireccion.
  const dispatch = useDispatch();

  //funcion que redirige
  const redireccionarSeguimiento = (seguimiento) => {
    dispatch(obtenerSeguimientoAction(seguimiento));

    history.push(`/seguimientos/${seguimiento.seguimiento_id}`);
  };

  return (
    <tr>
      <td>{seguimiento_id}</td>
      <td>{estado_id}</td>
      <td>{entrevista_id}</td>
      <td>{tipo_seguimiento_id}</td>
      <td>{categoria_id}</td>
      <td>{persona_id}</td>
      <td>
        <button
          type="button"
          onClick={() => redireccionarSeguimiento(seguimiento)}
          className=" btn-xs btn-success"
        >
          Ver
        </button>
      </td>
    </tr>
  );
};

export default EntrevistaFila;
