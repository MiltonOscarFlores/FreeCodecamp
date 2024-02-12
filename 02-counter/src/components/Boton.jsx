import React from "react";
import "../styles/Boton.css";

const Boton = ({ texto, esBotonClick, handleClick }) => {
  return (
    <button
      className={esBotonClick ? "botonClick" : "botonReiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
