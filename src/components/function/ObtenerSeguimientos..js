import React from "react";
import TablaFila from "../layout/TablaFila";

const ObtenerSeguimiento = ({ seguimientos }) => (
  <div>
    {seguimientos.map((seguimiento) => (
      <TablaFila
        key={seguimiento.id}
        fecha={seguimiento.fecha}
        name={seguimiento.name}
        motivo={seguimiento.motivo}
        estado={seguimiento.estado}
        orientador={seguimiento.orientador}
        color_estado={seguimiento.color_estado}
      />
    ))}
  </div>
);

export default ObtenerSeguimiento;
