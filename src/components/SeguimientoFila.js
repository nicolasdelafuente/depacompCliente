import React from "react";
import { Link } from "react-router-dom";

const SeguimientoFila = ({ seguimiento }) => {
  const { id, fecha, name, motivo, estado, orientador } = seguimiento;

  return (
    <tr>
      <td>{id}</td>
      <td>{fecha}</td>
      <td>{name}</td>
      <td>{motivo}</td>
      <td>{estado}</td>
      <td>{orientador}</td>
      <td>
        <Link to={`/seguimientos/${id}`} className="btn btn-outline-success">
          Ver
        </Link>
      </td>
    </tr>
  );
};

export default SeguimientoFila;
