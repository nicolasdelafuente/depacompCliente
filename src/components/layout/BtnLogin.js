import React from "react";
import "../style/Buttons.css";
import { Link } from "react-router-dom";

const BtnLogin = () => (
  <Link to="/entrevistas">
    <input
      type="submit"
      className="btn btn-primario btn-block"
      value="Iniciar Sesión"
    />
  </Link>
);

export default BtnLogin;
