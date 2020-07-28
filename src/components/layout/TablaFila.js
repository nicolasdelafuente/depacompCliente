import React from "react";
import "../style/Tabla.css";

class TablaFila extends React.Component {
  handleClick() {
    console.log("clicked");
  }

  render() {
    const { id, fecha, nombre, motivo, estado, orientador } = this.props;
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
            <p>{id}</p>
          </div>
        </div>
        <div className="celda">
          <p>{fecha}</p>
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
