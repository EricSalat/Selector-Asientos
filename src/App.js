import Pelicula from './componentes/Pelicula';
import BotonMas from './componentes/BotonMas';
import Buscador from './componentes/Buscador';
import FlechaAtras from "./componentes/FlechaAtras";
import Filtro from "./componentes/Filtro";
import SelectorAsientos from "./componentes/SelectorAsientos";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
     <div className="h1-titles">
       <FlechaAtras />
        <h1>Movie Tickets</h1>
        <Filtro />
     </div>
        <Buscador />
            <div className="h2-titles">
              <h2>Trending Movies</h2>
              <BotonMas />
            </div>
          <div className="contenedor-peliculas-carrousel">
            <div className="peliculas-carrousel">
              <Pelicula
                title="Buscando a Nemo"
                language="Español"
                category="Animación"
                img="buscando-a-nemo-2" />
              <Pelicula
                title="Big Hero 6"
                language="Español"
                category="Animación"
                img="grandes-heroes" />
              <Pelicula
                title="Brave"
                language="Español"
                category="Animación"
                img="brave" />
            </div>
          </div>
          <div className="h2-titles">
            <h2>Peliculas nuevas</h2>
            <BotonMas />
          </div>
              <div className="contenedor-peliculas-carrousel" >
                <div className="peliculas-carrousel">
                  <Pelicula
                    title="Enredados"
                    language="Español"
                    category="Animación"
                    img="enredados" />
                  <Pelicula
                    title="Up"
                    language="Español"
                    category="Animación"
                    img="up" />
                  <Pelicula
                    title="Monstruos SA"
                    language="Español"
                    category="Animación"
                    img="monstruos-sa" />
                </div>
              </div>
      </div>
      <SelectorAsientos />
    </div>
  );
}

export default App;
