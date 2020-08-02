import React from "react";
import logo from "../images/logoUnahur.jpg";
import imagenHeader from "../images/grondona.jpg";
import Buscador from "./Buscador";
import "../style/Navbar.css";
import "../style/Buttons.css";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <button className="logout btn" type="submit">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
