import React from "react";
import ObtenerSeguimientos from "../function/ObtenerSeguimientos";
import Navbar from "../layout/Navbar";
import TablaEncabezado from "../layout/TablaEncabezado";
import TablaTitulo from "../layout/TablaTitulo";
import data from "../json/misEntrevistas.json";

class MisEntrevistas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }
  render() {
    return (
      <div>
        <Navbar />
        <TablaTitulo />
        <TablaEncabezado />
        <ObtenerSeguimientos seguimientos={this.state.data} />
      </div>
    );
  }
}

export default MisEntrevistas;
