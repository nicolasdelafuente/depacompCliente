import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { obtenerSeguimientoAction } from "../actions/seguimientoActions";

const SeguimientoFila = ({ seguimiento }) => {
  const {
    seguimiento_id,
    persona_id,
    estado_id,
    motivo_id,
    orientador_id,
  } = seguimiento;

  const history = useHistory(); // Habilitar history para redireccion.
  const dispatch = useDispatch();

  //funcion que redirige
  const redireccionarSeguimiento = (seguimiento) => {
    dispatch(obtenerSeguimientoAction(seguimiento));

    history.push(`/seguimientos/${seguimiento.id}`);
  };

  return (
    <tr>
      <td>{seguimiento_id}</td>
      <td>{persona_id}</td>
      <td>{motivo_id}</td>
      <td>{estado_id}</td>
      <td>{orientador_id}</td>
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

export default SeguimientoFila;
