import React, { Fragment, useEffect, useState } from "react";
import SeguimientoFila from "./SeguimientoFila";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { listarSeguimientosAction } from "../actions/seguimientoActions";

const Seguimientos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la API.
    const cargarSeguimientos = () => dispatch(listarSeguimientosAction());
    cargarSeguimientos();
  });

  //Obtener ek¡l state
  const seguimientos = useSelector((state) => state.seguimientos.seguimientos);
  const error = useSelector((state) => state.seguimientos.error);
  const cargando = useSelector((state) => state.seguimientos.cargando);

  return (
    <Fragment>
      <h2 className="text-center my-5">Seguimientos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      {cargando ? <p className="text-center">Cargando....</p> : null}

      <table className="table table-striped text-center">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Seguimiento</th>
            <th scope="col">Nombre</th>
            <th scope="col">Motivo</th>
            <th scope="col">Estado</th>
            <th scope="col">Orientador</th>
          </tr>
        </thead>
        <tbody>
          {seguimientos.length === 0
            ? "No hay seguimientos"
            : seguimientos.map((seguimiento) => (
                <SeguimientoFila
                  key={seguimiento.id}
                  seguimiento={seguimiento}
                />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Seguimientos;
