import React from "react";
import { useHistory } from "react-router-dom";
import "../style/tabla.css";

import { useDispatch } from "react-redux";
import { obtenerSeguimientoAction } from "../actions/seguimientoActions";

const SeguimientoFila = ({ seguimiento }) => {
  const { seguimiento_id } = seguimiento;

  const history = useHistory(); // Habilitar history para redireccion.
  const dispatch = useDispatch();

  //funcion que redirige
  const redireccionarSeguimiento = (seguimiento) => {
    dispatch(obtenerSeguimientoAction(seguimiento));
    history.push(`/seguimientos/${seguimiento.id}`);
  };

  return (
    <tr>
      <td>
        <div
          style={{
            background: `${seguimiento.estados.color}`,
            width: 9,
            borderRadius: 7,
            padding: 0,
          }}
        >
          &nbsp;
        </div>
      </td>
      <td>{seguimiento.seguimiento_id}</td>
      <td>{seguimiento.personas.persona_nombre}</td>
      <td>{seguimiento.categorias.categoria_tipo}</td>
      <td>
        <div
          style={{
            borderRadius: 7,
            background: `${seguimiento.estados.color}`,
          }}
        >
          {seguimiento.estados.estado_tipo}
        </div>
      </td>
      <td>{seguimiento.orientadores.orientador_nombre}</td>
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
