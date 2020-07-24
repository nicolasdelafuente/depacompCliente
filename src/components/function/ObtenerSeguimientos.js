import React from "react";
import TablaCelda from "../layout/TablaCelda";

const ObtenerSeguimiento = ({ seguimientos }) => (
  <div>
    {seguimientos.map((seguimiento) => (
      <TablaCelda
        seguimiento={seguimiento.seguimiento}
        entrevista={seguimiento.entrevista}
        nombre={seguimiento.nombre}
        motivo={seguimiento.motivo}
        estado={seguimiento.estado}
        orientador={seguimiento.orientador}
        color={seguimiento.color}
      />
    ))}
  </div>
);

export default ObtenerSeguimiento;
