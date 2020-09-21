import React from "react";
import logo from "../images/logoUnahur.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <span>
        <a className="navbar-brand pr-5" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-center"
            alt="Logo Unahur"
          />
          Acompañamiento
        </a>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Entrevistas <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Otro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/seguimientos">
              Seguimientos
            </a>
          </li>
        </ul>
        <form className="form-inline m-1 mt-2 mb-2 mr-5">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="DNI o Seguimiento"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form>
        <div className="dropdown m-1 mt-2 mb-2">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            JG
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="!#">
              Perfil
            </a>
            <a className="dropdown-item" href="!#">
              Cerrar sesión{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
