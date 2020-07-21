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
          <div>
            <h1>Ricardo Enrique Bochini</h1>
          </div>
          <div className="nested-grid">
            <div>
              <h5>Teléfono movil</h5>
            </div>
            <div>
              <h3>15-4444-4444</h3>
            </div>
          </div>
          <div className="nested-grid">
            <div>
              <h5>Teléfono fijo</h5>
            </div>
            <div>
              <h3>4444-4444</h3>
            </div>
          </div>
          <div className="nested-grid">
            <div>
              <h5>E-mail</h5>
            </div>
            <div>
              <h3>ricardobochini@independiente.com.ar</h3>
            </div>
          </div>
          <div className="icon-grid">
            <div>
              <div>
                <i class="fas fa-plus"></i>
              </div>
              <div>
                <i class="far fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-persona">
        <div className="grid-per">
          <div>
            <h1>Seguimiento: 00010</h1>
          </div>
          <div>
            <h3>15-4444-4444</h3>
          </div>
          <div>
            <h3>Entrevista 3</h3>
          </div>
          <div>
            <h3>Próxima Reunión</h3>
          </div>
          <div className="icon-grid">
            <div>
              <div>
                <i class="fas fa-plus"></i>
              </div>
              <div>
                <i class="far fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="back-persona">
          <div className="grid-per">
            <h2>Motivo</h2>
            <div className="icon-grid">
              <div>
                <div>
                  <i class="fas fa-plus"></i>
                </div>
                <div>
                  <i class="far fa-edit"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Persona;
