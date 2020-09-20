import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { obtenerSeguimientoAction } from "../actions/seguimientoActions";

const SeguimientoFila = ({ seguimiento }) => {
  const { id, fecha, name, motivo, estado, orientador } = seguimiento;

  const history = useHistory(); // Haboilitar history para redireccion.
  const dispatch = useDispatch();

  //funcion que redirige
  const redireccionarSeguimiento = (seguimiento) => {
    dispatch(obtenerSeguimientoAction(seguimiento));

    history.push(`/seguimientos/${seguimiento.id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{fecha}</td>
      <td>{name}</td>
      <td>{motivo}</td>
      <td>{estado}</td>
      <td>{orientador}</td>
      <td>
        <button
          type="button"
          onClick={() => redireccionarSeguimiento(seguimiento)}
          className="btn btn-outline-success"
        >
          Ver
        </button>
      </td>
    </tr>
  );
};

export default SeguimientoFila;
