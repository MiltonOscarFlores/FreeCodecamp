import "./App.css";
import Personaje from "./components/Personaje";

function App() {
  return (
    <div className="App">
      <div className="contenedorPrincipal">
        <h1>The Walking Dead Characters:</h1>
        <Personaje
          nombre="Rick Grimes"
          estado="Alive"
          imagen="rick"
          info="Rick Grimes is a fictional character and the main protagonist in the post-apocalyptic comic book series The Walking Dead and the first nine seasons of the television series of the same name, in which he is portrayed by Andrew Lincoln."
          frase="Mi misericordia, prevalece... sobre mi ira."
        />
        <Personaje
          nombre="Daryl Dixon"
          estado="Alive"
          imagen="daryl"
          info="Daryl Dixon is a fictional character from AMC's horror drama series The Walking Dead, and the protagonist of its last three seasons, replacing Rick Grimes."
          frase="Lo que dijiste antes, que teníamos que cuidar de nosotros... Pues buscar a más gente, es cuidarnos también"
        />
        <Personaje
          nombre="Negan Smith"
          estado="Alive"
          info="Negan is a fictional character in the comic book series The Walking Dead and in the television series of the same name. He was the leader of the Saviors, a group of survivors in the Sanctuary that oppresses other survivor communities and forces them to pay tribute to him."
          frase="Hilltop aprenderá a obedecer, de un modo u otro. Ya sea muertos o vivos, o algo a mitad de camino"
          imagen="negan"
        />
      </div>
    </div>
  );
}

export default App;
