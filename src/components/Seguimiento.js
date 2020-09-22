import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Seguimiento = () => {
  const seguimiento = useSelector(
    (state) => state.seguimientos.seguimientoMostrar
  );

  if (!seguimiento)
    return (
      <p className="font-weight-bold alert alert-danger text-center mt-4">
        Hubo un error
      </p>
    );

  const {
    id,
    fecha,
    name,
    motivo,
    estado,
    orientador,
    color_estado,
  } = seguimiento;

  return (
    <div className="row">
      <div className="col">
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
                  <h4>{name}</h4>
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
                  <label htmlFor="telefonoMovil">Teléfono Móvil</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="telefonoMovil"
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="telefonoFijo">Teléfono Fijo</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="telefonoFijo"
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="email"
                    value={color_estado}
                  />
                </div>
              </div>

              <div className="form-row justify-content-end">
                <div className="form-group col-md-3">
                  <label htmlFor="">Nº Documento</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="documento"
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Carrerra</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="carrera"
                    value={color_estado}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-5 font-weight-bold">
          <div className="card-header">
            <div className="row justify-content-between">
              <a
                className="btn"
                data-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                <div className="col-xs-9 p-0">
                  <h4>Seguimiento {id}</h4>
                </div>
              </a>
              <div className="col-xs-3 pl-4 pt-2 mr-3 text-right border-left border-secondary">
                <i className="far fa-edit fa-lg"></i>
              </div>
            </div>
          </div>
          <div className="collapse" id="collapseExample2">
            <div className="card-body">
              <div className="form-row justify-content-between">
                <div className="form-group col-md-3">
                  <label htmlFor="">Estado</label>
                  <select id="inputState" className="form-control border-0">
                    <option selected>{estado}</option>
                    <option>Ausente</option>
                    <option>Citadx</option>
                    <option>Contactar</option>
                    <option>En Proceso</option>
                    <option>Espera de Respuesta</option>
                    <option>Realizado</option>
                    <option>Sin Asignar</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Entrevista</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="i"
                    value="3"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Próxima Entrevista</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value={fecha}
                  />
                </div>
              </div>
              <div className="form-row justify-content-end">
                <div className="form-group col-md-3">
                  <label htmlFor="">Motivo</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="i"
                    value={motivo}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Tipo de seguimiento</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Orientador</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="orientador"
                    value={orientador}
                  />
                </div>
              </div>
              <div className="form-row justify-content-end">
                <div className="form-group col-md-3">
                  <label htmlFor="">Derivación</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="derivacion"
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Nombre Derivador</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="nombreDerivador"
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="">Teléfono</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="telefonoDerivador"
                    value={color_estado}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="mailDerivador"
                    value={color_estado}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-5 font-weight-bold">
          <div className="card-header mb-2">
            <h5>Motivo</h5>
          </div>
          <div className="form-group ml-2 mr-2">
            <textarea className="form-control" id="" rows="5">
              Se retiró en 1991, dejando atrás 19 años como uno de los más
              grandes símbolos del fútbol a nivel mundial, en una carrera donde
              jugó 714 partidos, metió 108 goles y si bien no hay estadísticas
              oficiales, se estima que realizó más de 200 pases-gol.
            </textarea>
          </div>
        </div>

        <div className="card mt-5 font-weight-bold">
          <div className="card-header mb-2">
            <h5>Observaciones</h5>
          </div>
          <div className="form-group ml-2 mr-2">
            <textarea
              className="form-control"
              id=""
              rows="5"
              placeholder="Ingrese observaciones ..."
            ></textarea>
          </div>
        </div>

        <div className="card mt-5 font-weight-bold">
          <div className="card-header mb-2">
            <h5>Acciones a implementar</h5>
          </div>
          <div className="form-group ml-2 mr-2">
            <textarea
              className="form-control"
              id=""
              rows="5"
              placeholder="Ingrese acciones ..."
            ></textarea>
          </div>
        </div>

        <div className="card mt-5 font-weight-bold">
          <div className="card-header">
            <i className="far fa-calendar-plus fa-2x"></i>
            <span>
              <h5>Agendar entrevista</h5>
            </span>
          </div>
        </div>

        <div className="card text-white border-success mt-5 font-weight-bold">
          <div className="card-header">
            <div className="row justify-content-end">
              <button type="button" className="btn btn-success mr-3">
                Guardar
              </button>
              <button type="button" className="btn btn-outline-danger mr-2">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <div className="card mt-5">
          <div className="card-header mb-2">
            <h5>Histórico</h5>
          </div>
          <div className="form-group ml-2 mr-2">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>#3 </span> Julio Grondona, 22/05/20 a las 12:30 Hs.
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>#3 </span> Julio Grondona, 09/03/20 a las 12:30 Hs.
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>#3 </span> Julio Grondona, 22/12/19 a las 16:45 Hs.
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguimiento;
