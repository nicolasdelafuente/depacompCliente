import React, { useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { crearSeguimientoActions } from "../actions/seguimientoActions";

const NuevoSeguimiento = () => {
  //State del componente
  const [nombre, guardarNombre] = useState("");
  const [motivo, guardarMotivo] = useState("");
  const [estado, guardarEstado] = useState("");
  const [orientador, guardarOrientador] = useState("");

  //uso dispatch y me crea una función
  const dispatch = useDispatch();

  //Acceder al state del store
  const cargando = useSelector((state) => state.seguimientos.loading);
  const error = useSelector((state) => state.seguimientos.error);

  //Llamada al action de crearSeguimiento
  const crearSeguimeinto = (seguimiento) =>
    dispatch(crearSeguimientoActions(seguimiento));

  //Cuando se haga el submit
  const submitNuevoSeguimiento = (e) => {
    e.preventDefault();

    //Validar Formulario.
    if (nombre.trim() === "") {
      return;
    }

    //Si no hay errores.

    //Crear nuevo seguimiento.
    crearSeguimeinto({
      nombre,
      motivo,
      estado,
      orientador,
    });
  };

  return (
    <div className="row">
      <div className="col">
        {error ? (
          <p className="font-weight-bold alert alert-danger p2 mt-3 text-center">
            {" "}
            Hubo un error.{" "}
          </p>
        ) : null}
        <form onSubmit={submitNuevoSeguimiento}>
          <div className="form-group">
            <div className="card mt-5 font-weight-bold">
              <div className="card-header">
                <div className="row justify-content-between">
                  <a
                    className="btn"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <div className="col-xs-9 p-0">
                      <h4>Ricardo Enrique Bochini</h4>
                    </div>
                  </a>
                  <div className="col-xs-3 pl-4 pt-2 mr-3 text-right border-left border-secondary">
                    <i className="far fa-edit fa-lg"></i>
                  </div>
                </div>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="card-body">
                  <div className="form-row justify-content-end">
                    <div className="form-group col-md-3">
                      <label htmlFor="inputCity">Nombre</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="inputCity"
                        value={nombre}
                        onChange={(e) => guardarNombre(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="">Motivo</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="i"
                        value={motivo}
                        onChange={(e) => guardarMotivo(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="">Estado</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="i"
                        value={estado}
                        onChange={(e) => guardarEstado(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="">Orientador</label>
                      <input
                        type="text"
                        className="form-control border-0"
                        id="i"
                        value={orientador}
                        onChange={(e) => guardarOrientador(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="card text-white border-success mt-5 font-weight-bold">
              <div className="card-header">
                <div className="row justify-content-end">
                  <button type="submit" className="btn btn-success mr-3">
                    Guardar
                  </button>
                  <button type="button" className="btn btn-outline-danger mr-2">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {cargando ? <p>Cargando...</p> : null}
      </div>
    </div>
  );
};

export default NuevoSeguimiento;
