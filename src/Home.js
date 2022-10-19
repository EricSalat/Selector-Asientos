import React from "react";
import { Link } from "react-router-dom";
import Pelicula from './componentes/Pelicula';
import BotonMas from './componentes/BotonMas';
import Buscador from './componentes/Buscador';
import FlechaAtras from "./componentes/FlechaAtras";
import Filtro from "./componentes/Filtro";
import "./App.css";


function Home() {
  return (
    <div className="container">
      <div className="h1-titles">
        <FlechaAtras />
        <h1>Movie Tickets</h1>
        <Filtro />
      </div>
      <Buscador />
      <div className="h2-titles">
        <h2>Trending Movies</h2>
        {/* <button><a href="http://ericsalat.com/calculadora">Ver más</a></button> */}
        <Link to="/PantallaAsientos"><button>Ver más</button></Link>
      </div>
      <div className="contenedor-peliculas-carrousel">
        <div className="peliculas-carrousel">
          <Pelicula
            title="Buscando a Nemo"
            language="Español"
            category="Animación"
            img="buscando-a-nemo-2"
          />
          <Pelicula
            title="Big Hero 6"
            language="Español"
            category="Animación"
            img="grandes-heroes"
          />
          <Pelicula
            title="Brave"
            language="Español"
            category="Animación"
            img="brave"
          />
        </div>
      </div>
      <div className="h2-titles">
        <h2>Peliculas nuevas</h2>
        <BotonMas />
      </div>
      <div className="contenedor-peliculas-carrousel">
        <div className="peliculas-carrousel">
          <Pelicula
            title="Enredados"
            language="Español"
            category="Animación"
            img="enredados"
          />
          <Pelicula
            title="Up"
            language="Español"
            category="Animación"
            img="up"
          />
          <Pelicula
            title="Monstruos SA"
            language="Español"
            category="Animación"
            img="monstruos-sa"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
