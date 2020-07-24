import React, { useState } from "react";
import BtnLogin from "../layout/BtnLogin";
import logo from "../images/logoUnahur.jpg";
import "../style/Login.css";

const Login = () => {
  //State para iniciar sesion
  const [user, guardarUsuario] = useState({
    usuario: "",
    password: "",
  });

  // extraer de usuario
  const { usuario, password } = user;

  const onChange = (e) => {
    guardarUsuario({
      ...user, //copia de usuario, para que lo que está escrito en el state no se rescriba
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiere iniciar sesiom
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no existen campos vacíos

    //Pasarlo al action
  };

  return (
    <div className="content">
      <div className="login-box">
        <div className="logo-info sombra-info">
          <div className="logo-index">
            <img src={logo} width="50px" height="50px" alt="Logo" />
          </div>
          <h2 className="departamento">Departamento de</h2>
          <h1 className="acompañamiento">Acompañamiento</h1>
        </div>
        <div className="login-form sombra-login">
          <form onSubmit={onSubmit}>
            <div>
              <input
                className="input-login"
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                value={usuario}
                onChange={onChange}
              />
            </div>
            <div>
              <input
                className="input-login"
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={onChange}
              />
            </div>
            <div>
              <BtnLogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
