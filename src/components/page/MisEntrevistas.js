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
      let res = await fetch("http://localhost:4000/api/seguimientos/");
      let data = await res.json(res);

      this.setState({
        data: [data],
      });
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
