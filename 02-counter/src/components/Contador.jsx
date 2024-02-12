import React from "react";
import "../styles/Contador.css";

const Contador = ({ numeroDeClicks }) => {
  return <div className="contador">{numeroDeClicks}</div>;
};

export default Contador;
