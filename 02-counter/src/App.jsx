import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import logo from "./images/logo.png";

function App() {
  const [numeroDeClicks, setNumeroDeClick] = useState(0);

  const handleClick = () => {
    setNumeroDeClick(numeroDeClicks + 1);
  };

  const reiniciarContador = () => {
    setNumeroDeClick(0);
  };

  return (
    <div className="App">
      <div className="contenedorLogo">
        <img
          className="logo"
          src={logo}
          alt="Logo The Walking Dead"
        />
      </div>
      <div className="contenedorMain">
        <Contador numeroDeClicks={numeroDeClicks} />
        <Boton
          texto="Click"
          esBotonClick={true}
          handleClick={handleClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonClick={false}
          handleClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
