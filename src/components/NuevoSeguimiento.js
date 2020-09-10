import React from "react";

const NuevoSeguimiento = () => {
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
                  <label for="inputCity">Teléfono Móvil</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="inputCity"
                    value="15-1010-1010"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputCity">Teléfono Móvil</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="inputCity"
                    value="4444-4444"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="inputEmail4"
                    placeholder="ricardobochini@gmail.com"
                  />
                </div>
              </div>

              <div className="form-row justify-content-end">
                <div className="form-group col-md-3">
                  <label for="">DNI</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="inputCity"
                    value="10.150.510"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="">Carrerra</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="inputCity"
                    value="Tecnicatura en Informática"
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
                aria-controls="collapseExample"
              >
                <div className="col p-0">
                  <h4>Seguimiento 00010</h4>
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
                  <select id="inputState" className="form-control border-0">
                    <option selected>Citadx</option>
                    <option>Ausente</option>
                    <option>Citadx</option>
                    <option>Contactar</option>
                    <option>En Proceso</option>
                    <option>Espera de Respuesta</option>
                    <option>Realizado</option>
                    <option>Sin Asignar</option>
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value="Próxima Reunión: 10 de septiembre a las 10:10Hs."
                  />
                </div>
              </div>

              <div className="form-row justify-content-end">
                <div className="form-group col-md-3">
                  <label for="">Entrevista</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="i"
                    value="3"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="">Tipo de seguimiento</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value="Entrevista"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="">Orientador</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id="inputCity"
                    value="Nombre Apellido"
                  />
                </div>
              </div>

              <div className="form-row justify-content-end">
                <div className="form-group col-md-3">
                  <label for="">Derivación</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value="Demanda Espontánea"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="">Nombre Derivador</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value="Nombre Derivador"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="">Teléfono</label>
                  <input
                    type="text"
                    className="form-control border-0"
                    id=""
                    value="5555-5555"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control border-0"
                    id="inputEmail4"
                    placeholder="juliogrondona@gmail.com"
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

export default NuevoSeguimiento;
