import React, { Fragment } from "react";
import Barra from "../layout/Barra";
import BarraEstado from "../layout/BarraEstado";

const Persona = () => {
  return (
    <Fragment>
      <Barra />
      <BarraEstado />
      <div className="back-persona">
        <div className="grid-per">
          <div>Ricardo Enrique Bochini</div>
          <div>Teléfono movil</div>
          <div>Teléfono fijo</div>
          <div>E-mail</div>
          <div>15-4444-4444</div>
          <div>4444-4444</div>
          <div>ricardobochini@independiente.com.ar</div>
          <div>icono mas</div>
          <div>icono edit</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Persona;
