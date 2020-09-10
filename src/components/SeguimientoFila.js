import React from "react";

const SeguimientoFila = ({ seguimiento }) => {
  const { id, fecha, name, motivo, estado, orientador } = seguimiento;
  return (
    <tr>
      <td>{id}</td>
      <td>{fecha}</td>
      <td>{name}></td>
      <td>{motivo}</td>
      <td>{estado}</td>
      <td>{orientador}</td>
    </tr>
  );
};

export default SeguimientoFila;
