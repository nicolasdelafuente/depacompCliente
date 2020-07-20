import React from "react";

const Paginado = () => {
  return (
    <div className="paginacion">
      <ul>
        <li>
          <a href="!#">Página 1 de 3</a>
        </li>
        <li>
          <a href="!#" className="active">
            1
          </a>
        </li>
        <li>
          <a href="!#">2</a>
        </li>
        <li>
          <a href="!#">3</a>
        </li>
        <li>
          <a href="!#">></a>
        </li>
        <li>
          <a href="!#">última</a>
        </li>
      </ul>
    </div>
  );
};

export default Paginado;
