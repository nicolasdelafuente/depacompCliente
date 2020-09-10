import React, { Fragment, useEffect } from "react";
import SeguimientoFila from "./SeguimientoFila";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { listarSeguimientosAction } from "../actions/listarSeguimientosActions";

const Seguimientos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API.
    const cargarSeguimientos = () => dispatch(listarSeguimientosAction());
    cargarSeguimientos();
  });

  // Obtener el state.
  const seguimientos = useSelector((state) => state.seguimientos.seguimientos);

  return (
    <Fragment>
      <h2 className="text-center my-5">Seguimientos</h2>
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
        <tbody>
          {seguimientos.length === 0
            ? "No existen seguimientos"
            : seguimientos.map((seguimiento) => (
                <SeguimientoFila key={seguimiento.id} producto={seguimiento} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Seguimientos;
