import React from "react";
import logo from "../images/logoUnahur.jpg";
import imagenHeader from "../images/grondona.jpg";
import Buscador from "./Buscador";
import "../style/Navbar.css";
import "../style/Buttons.css";

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} width="50px" height="50px" alt="Logo" />
      </div>
      <div>
        <button className="btn btn-m" type="submit">
          Mis entrevistas
        </button>
      </div>
      <div>
        <Buscador />
      </div>
      <div>
        <img src={imagenHeader} alt="Usuario" className="imgRedonda" />
      </div>
      <div>
        <button className="logout" type="submit">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
