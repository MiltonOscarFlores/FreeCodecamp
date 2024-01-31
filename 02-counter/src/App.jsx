import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import logo from "./images/logo.png";

function App() {
  const handleClick = () => {
    console.log("Click papu");
  };

  const reiniciarContador = () => {
    console.log("reiniciar makinola");
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
      <div className="contenedorMain"></div>
      <Contador />
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
  );
}

export default App;
