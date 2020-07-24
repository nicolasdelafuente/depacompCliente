import React from "react";
import "../style/Persona.css";

const Persona = () => {
  return (
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
  );
};

export default Persona;
