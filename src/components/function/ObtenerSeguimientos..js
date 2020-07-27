import React from "react";
import TablaFila from "../layout/TablaFila";

const ObtenerSeguimiento = ({ seguimientos }) => (
  <div>
    {seguimientos.map((seguimiento) => (
      <TablaFila
        key={seguimiento.id}
        entrevista={seguimiento.fecha}
        nombre={seguimiento.name}
        motivo={seguimiento.motivo}
        estado={seguimiento.estado}
        orientador={seguimiento.orientador}
        color={seguimiento.color_estado}
      />
    ))}
  </div>
);

export default ObtenerSeguimiento;
