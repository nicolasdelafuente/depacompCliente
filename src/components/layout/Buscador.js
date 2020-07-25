import React from "react";
import "../style/Buscador.css";

const Buscador = () => {
  return (
    <div className="buscador">
      <div className="contenedor-buscador">
        <input type="search" placeholder="DNI o Seguimiento" />
        <button className="btn-buscador" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Buscador;
