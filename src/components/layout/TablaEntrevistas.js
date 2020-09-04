import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/estilos.css";

function TablaEntrevistas() {
  const url = "https://depacompserver.rj.r.appspot.com/api/seguimientos/";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-hover table-responsive-sm text-center">
            <thead>
              <tr>
                <th>Seguimiento</th>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Motivo</th>
                <th>Estado</th>
                <th>Orientador</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entrevista) => (
                <tr
                  className="border-estado p3"
                  style={{ color: `${entrevista.color_estado}` }}
                  key={entrevista.id}
                >
                  <td style={{ color: `black` }}>{entrevista.id}</td>
                  <td style={{ color: `black` }}>{entrevista.fecha}</td>
                  <td style={{ color: `black` }}>{entrevista.name}</td>
                  <td style={{ color: `black` }}>{entrevista.motivo}</td>
                  <td style={{ color: `black` }}>{entrevista.estado}</td>
                  <td style={{ color: `black` }}>{entrevista.orientador}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TablaEntrevistas;
