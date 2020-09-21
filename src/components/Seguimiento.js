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
    <div class="row">
      <div class="col">
        <div class="card mt-5 font-weight-bold">
          <div class="card-header">
            <div class="row justify-content-between">
              <a
                class="btn"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <div class="col-xs-9 p-0">
                  <h4>{name}</h4>
                </div>
              </a>
              <div class="col-xs-3 pl-4 pt-2 mr-3 text-right border-left border-secondary">
                <i class="far fa-edit fa-lg"></i>
              </div>
            </div>
          </div>
          <div class="collapse" id="collapseExample">
            <div class="card-body">
              <div class="form-row justify-content-end">
                <div class="form-group col-md-3">
                  <label for="inputCity">Teléfono Móvil</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="telefonoMovil"
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="inputCity">Teléfono Fijo</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="telefonoFijo"
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control border-0"
                    id="email"
                    value={color_estado}
                  />
                </div>
              </div>

              <div class="form-row justify-content-end">
                <div class="form-group col-md-3">
                  <label for="">Nº Documento</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="documento"
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="">Carrerra</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="carrera"
                    value={color_estado}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-5 font-weight-bold">
          <div class="card-header">
            <div class="row justify-content-between">
              <a
                class="btn"
                data-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                <div class="col-xs-9 p-0">
                  <h4>Seguimiento {id}</h4>
                </div>
              </a>
              <div class="col-xs-3 pl-4 pt-2 mr-3 text-right border-left border-secondary">
                <i class="far fa-edit fa-lg"></i>
              </div>
            </div>
          </div>
          <div class="collapse" id="collapseExample2">
            <div class="card-body">
              <div class="form-row justify-content-between">
                <div class="form-group col-md-3">
                  <label for="">Estado</label>
                  <select id="inputState" class="form-control border-0">
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
                <div class="form-group col-md-3">
                  <label for="">Entrevista</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="i"
                    value="3"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="">Próxima Entrevista</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id=""
                    value={fecha}
                  />
                </div>
              </div>
              <div class="form-row justify-content-end">
                <div class="form-group col-md-3">
                  <label for="">Motivo</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="i"
                    value={motivo}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="">Tipo de seguimiento</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id=""
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="">Orientador</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="orientador"
                    value={orientador}
                  />
                </div>
              </div>
              <div class="form-row justify-content-end">
                <div class="form-group col-md-3">
                  <label for="">Derivación</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="derivacion"
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="">Nombre Derivador</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="nombreDerivador"
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="">Teléfono</label>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="telefonoDerivador"
                    value={color_estado}
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control border-0"
                    id="mailDerivador"
                    value={color_estado}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mt-5 font-weight-bold">
          <div class="card-header mb-2">
            <h5>Motivo</h5>
          </div>
          <div class="form-group ml-2 mr-2">
            <textarea class="form-control" id="" rows="5">
              Se retiró en 1991, dejando atrás 19 años como uno de los más
              grandes símbolos del fútbol a nivel mundial, en una carrera donde
              jugó 714 partidos, metió 108 goles y si bien no hay estadísticas
              oficiales, se estima que realizó más de 200 pases-gol.
            </textarea>
          </div>
        </div>

        <div class="card mt-5 font-weight-bold">
          <div class="card-header mb-2">
            <h5>Observaciones</h5>
          </div>
          <div class="form-group ml-2 mr-2">
            <textarea
              class="form-control"
              id=""
              rows="5"
              placeholder="Ingrese observaciones ..."
            ></textarea>
          </div>
        </div>

        <div class="card mt-5 font-weight-bold">
          <div class="card-header mb-2">
            <h5>Acciones a implementar</h5>
          </div>
          <div class="form-group ml-2 mr-2">
            <textarea
              class="form-control"
              id=""
              rows="5"
              placeholder="Ingrese acciones ..."
            ></textarea>
          </div>
        </div>

        <div class="card mt-5 font-weight-bold">
          <div class="card-header">
            <i class="far fa-calendar-plus fa-2x"></i>
            <span>
              <h5>Agendar entrevista</h5>
            </span>
          </div>
        </div>

        <div class="card text-white border-success mt-5 font-weight-bold">
          <div class="card-header">
            <div class="row justify-content-end">
              <button type="button" class="btn btn-success mr-3">
                Guardar
              </button>
              <button type="button" class="btn btn-outline-danger mr-2">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <div class="card mt-5">
          <div class="card-header mb-2">
            <h5>Histórico</h5>
          </div>
          <div class="form-group ml-2 mr-2">
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link"
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
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
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
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
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
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body">
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
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button
                      class="btn btn-link collapsed"
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
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body">
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
