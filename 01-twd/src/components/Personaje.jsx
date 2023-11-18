import React from "react";
import "../Styles/Personaje.css";

const Personaje = (props) => {
  return (
    <div className="contenedorPersonaje">
      <img
        className="imagenPersonaje"
        src={require(`../images/${props.imagen}.jpg`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedorTextoPersonaje">
        <p className="nombrePersonaje">
          <strong>{props.nombre}</strong>
        </p>
        <p className="estadoPersonaje">Status - {props.estado}</p>
        <p className="infoPersonaje">{props.info}</p>
        <p className="frasePersonaje">
          <strong>"{props.frase}"</strong>
        </p>
      </div>
    </div>
  );
};

export default Personaje;
