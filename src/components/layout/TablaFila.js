import React from "react";
import "../style/Tabla.css";

class TablaFila extends React.Component {
  handleClick() {
    console.log("clicked");
  }

  render() {
    const {
      seguimiento,
      entrevista,
      nombre,
      motivo,
      estado,
      orientador,
    } = this.props;
    return (
      <div className="container enlace" onClick={this.handleClick}>
        <div
          className="celda estado"
          style={{ background: `${this.props.color}` }}
        >
          &nbsp;
        </div>
        <div className="celda">
          <div>
            <p>{seguimiento}</p>
          </div>
        </div>
        <div className="celda">
          <p>{entrevista}</p>
        </div>
        <div className="celda">
          <p>{nombre}</p>
        </div>
        <div className="celda">
          <p>{motivo}</p>
        </div>
        <div
          className="celda estado"
          style={{ background: `${this.props.color}` }}
        >
          <p>{estado}</p>
        </div>
        <div className="celda">
          <p>{orientador}</p>
        </div>
      </div>
    );
  }
}

export default TablaFila;
