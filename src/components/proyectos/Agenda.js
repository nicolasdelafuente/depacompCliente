import React, { Fragment } from "react";
import Barra from "../layout/Barra";
import Paginado from "../layout/Paginado";
import Tabla from "../layout/Tabla";

function Agenda() {
  return (
    <Fragment>
      <Barra />
      <Tabla />
      <Paginado />
    </Fragment>
  );
}

export default Agenda;
