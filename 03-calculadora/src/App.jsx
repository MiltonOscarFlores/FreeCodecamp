import logo from "./assets/images/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="logoContainer">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>
    </>
  );
}

export default App;
