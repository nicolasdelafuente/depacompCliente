import React from "react";
import Navbar from "../layout/Navbar";
import TablaEntrevistas from "../layout/TablaEntrevistas";
import "../style/estilos.css";

class MisEntrevistas extends React.Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div>
        <Navbar />
        <div clasname="row mt-20">
          <TablaEntrevistas />
        </div>
      </div>
    );
  }
}

export default MisEntrevistas;
