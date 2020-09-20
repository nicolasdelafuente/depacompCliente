import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Seguimiento = () => {
  const seguimiento = useSelector(
    (state) => state.seguimientos.seguimientoMostrar
  );

  if (!seguimiento) return null;

  const { name, estado } = seguimiento;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Editar</h2>

            <form>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="name"
                  value={name}
                  onChange=""
                />
              </div>

              <div className="form-group">
                <label>Estado</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Estado"
                  name="estado"
                  value={estado}
                  onChange=""
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguimiento;
