import React from "react";

const Tabla = () => {
  return (
    <body>
      <div className="container-table">
        <div className="table-title">Mis entrevistas</div>

        <div className="table-header linea"></div>
        <div className="table-header">Seguimiento</div>
        <div className="table-header">Entrevista</div>
        <div className="table-header">Nombre</div>
        <div className="table-header">Motivo</div>
        <div className="table-header">Estado</div>
        <div className="table-header">Orientador</div>

        <div className="table-item linea estado citadx"></div>
        <div className="table-item linea">
          <div></div>
          <div>00010</div>
        </div>
        <div className="table-item">Hoy, 10:10 Hs.</div>
        <div className="table-item">Ricardo Enrique Bochini</div>
        <div className="table-item">Pedagogía</div>
        <div className="table-item estado citadx">Citadx</div>
        <div className="table-item">Julio Grondona</div>

        <div className="table-item linea estado enProceso"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado enProceso">En proceso</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado sinEstado"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado sinEstado">Sin estado</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado citadx"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado citadx">Citadx</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado contactar"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado contactar">Contactar</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado esperaDeRespuesta"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado esperaDeRespuesta">
          Espera de respuesta
        </div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado contactar"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado contactar">Contactar</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado citadx"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado citadx">Citadx</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado sinEstado"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado sinEstado">Sin estado</div>
        <div className="table-item">Nombre Apellido</div>

        <div className="table-item linea estado enProceso"></div>
        <div className="table-item">00000</div>
        <div className="table-item">Horario Cita</div>
        <div className="table-item">Nombre Apellido</div>
        <div className="table-item">Motivo</div>
        <div className="table-item estado enProceso">En proceso</div>
        <div className="table-item">Nombre Apellido</div>
      </div>

      <button className="btn btn-primario btn-flotante">
        Todas las entrevistas
      </button>
    </body>
  );
};

export default Tabla;
