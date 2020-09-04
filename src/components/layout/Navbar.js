import React from "react";
import logo from "../images/logoUnahur.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          class="d-inline-block align-center"
          alt="Logo Unahur"
        />
        UNAHUR - Acompañamiento
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Entrevistas <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Otro
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Seguimientos
            </a>
          </li>
        </ul>
        <form class="form-inline m-1 mt-2 mb-2 mr-5">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="DNI o Seguimiento"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Buscar
          </button>
        </form>
        <div class="dropdown m-1 mt-2 mb-2">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Julio Grondona
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Perfil
            </a>
            <a class="dropdown-item" href="#">
              Cerrar sesión{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
