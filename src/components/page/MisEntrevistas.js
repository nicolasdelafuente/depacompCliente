import React from "react";
import ObtenerSeguimientos from "../function/ObtenerSeguimientos.";
import Navbar from "../layout/Navbar";
import TablaEncabezado from "../layout/TablaEncabezado";
import TablaTitulo from "../layout/TablaTitulo";

class MisEntrevistas extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    await this.fetchSeguimientos();
  }

  fetchSeguimientos = async () => {
    try {
      fetch("https://depacompserver.rj.r.appspot.com/api/seguimientos/") //remoto
        //fetch("http://localhost:8080/api/seguimientos/") //local
        .then((res) => res.json())
        .then((response) => this.setState(response));
    } catch (error) {
      console.log(error);
    }
  };

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
