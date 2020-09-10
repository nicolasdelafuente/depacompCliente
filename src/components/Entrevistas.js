import React, { Fragment } from "react";

const Entrevistas = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Mis entrevistas</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Seguimiento</th>
            <th scope="col">Entrevista</th>
            <th scope="col">Nombre</th>
            <th scope="col">Motivo</th>
            <th scope="col">Estado</th>
            <th scope="col">Orientador</th>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default Entrevistas;
