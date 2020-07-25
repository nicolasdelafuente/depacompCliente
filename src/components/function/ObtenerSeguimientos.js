import React from "react";
import TablaFila from "../layout/TablaFila";

const ObtenerSeguimiento = ({ seguimientos }) => (
  <div>
    {seguimientos.map((seguimiento) => (
      <TablaFila
        key={seguimiento.id}
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
