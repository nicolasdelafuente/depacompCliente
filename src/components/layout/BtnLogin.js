import React from "react";
import "../style/Buttons.css";
import { Link } from "react-router-dom";

const BtnLogin = () => (
  <Link to="/entrevistas" style={{ textDecoration: "none" }}>
    <input
      type="submit"
      className="btn btn-login btn-block"
      value="Iniciar Sesión"
    />
  </Link>
);

export default BtnLogin;
