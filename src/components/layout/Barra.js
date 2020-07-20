import React from "react";
import logo from "../images/logoUnahur.jpg";
import imagenHeader from "../images/grondona.jpg";

const Barra = () => {
  return (
    <header>
      <div className="content logo-nav-container">
        <a href="!#" className="logo">
          <img src={logo} width="50px" height="50px" alt="Logo" />
        </a>
        <nav class="navigation">
          <ul>
            <li>
              <div className="buscador">
                <input
                  type="search"
                  id="search"
                  placeholder="DNI o Seguimiento"
                />
                <div className="logout">
                  <i class="fa fa-search"></i>
                </div>
              </div>
            </li>
            <li>
              <img src={imagenHeader} alt="Usuario" className="imgRedonda" />
            </li>
            <li>
              <i class="fas fa-sign-out-alt aa"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Barra;
