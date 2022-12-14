import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pelicula from './componentes/Pelicula';
import BotonMas from './componentes/BotonMas';
import Buscador from './componentes/Buscador';
import { Precios, User } from "./componentes/Iconos";
import "./App.css";


function Home() {


  const cartelera = [
    {
      title: "Buscando a Nemo",
      duration: "1h 40min",
      director: "Andrew Stanton",
      year: 2003,
      rate: 8.2,
      synopsis: "Cuando su hijo es capturado, un tímido pez payaso se embarca en un viaje para traerlo a casa.",
      language: "Español",
      genre: "Comedia",
      image: "buscando-a-nemo-2"
    },
    {
      title: "Big Hero 6",
      duration: "1h 42min",
      director: "Don Hall · Chris Williams" ,
      year: 2014,
      rate: 7.8,
      synopsis: "Un vínculo especial se desarrolla entre el robot inflable de gran tamaño Baymax y el prodigio Hiro Hamada, que se unen a un grupo de amigos para formar una banda de héroes de alta tecnología.",
      language: "Inglés",
      genre: "Animación",
      image: "grandes-heroes"
    },
    {
      title: "Brave",
      duration: "1h 33min",
      director: "Mark Andrews · Brenda Chapman" ,
      year: 2012,
      rate: 7.1,
      synopsis: "Con la determinación de forjar su propio camino en la vida, la princesa Mérida desafía una tradición que trae caos a su reino. Mérida dependerá de su valentía y sus habilidades como arquera para deshacer una maldición bestial.",
      language: "Español",
      genre: "Aventuras",
      image: "brave"
    },
    {
      title: "Enredados",
      duration: "1h 40min",
      director: "Nathan Greno",
      year: 2010,
      rate: 7.7,
      synopsis: "La Rapunzel de pelo largo y mágico ha pasado toda su vida en una torre, pero ahora que un ladrón fugitivo se ha topado con ella, está a punto de descubrir el mundo por primera vez, y quién es realmente.",
      language: "Español",
      genre: "Aventuras",
      image: "enredados"
    },
    {
      title: "Up",
      duration: "1h 36min",
      director: "Pete Docter · Bob Peterson",
      year: 2009,
      rate: 8.3,
      synopsis: "Carl Fredricksen, de 78 años, viaja a las cataratas Paraíso en su casa equipada con globos, sin darse cuenta de que lleva a un polizón.",
      language: "Español",
      genre: "Animación",
      image: "up"
    },
    {
      title: "Monstruos SA",
      duration: "1h 32min",
      director: "Pete Docter · David Silverman",
      year: 2001,
      rate: 8.1,
      synopsis: "Dos monstruos, Sulley y Mike, trabajan en Monstruos S.A. asustando niños para obtener energía. Los monstruos piensan que los humanos son tóxicos y, cuando una niña entre en su mundo, ambos deberán enviarla a casa lo antes posible.",
      language: "Inglés",
      genre: "Comedia",
      image: "monstruos-sa"
    },
  ]

  const [carteleraTotal, setCarteleraTotal] = useState(cartelera)
  const [searchValue, setSearchValue] = useState('')

  let searchedMovies = [];

  if (!searchValue.length >= 1 ) {
    searchedMovies = carteleraTotal;
  } else {
    searchedMovies = carteleraTotal.filter(pelicula => {
      // const peliculaTexto = pelicula.title.toLowerCase();
      // const busquedaTexto = searchValue.toLowerCase();
      // return peliculaTexto.includes(busquedaTexto);
      return pelicula.title.includes(searchValue);
    })
  }

  //TODO: Està ben fet però no va el buscador.
  



  return (
    <div className="container">
      <div className="h1-titles">
      <Link to="./componentes/Tarifas.jsx">
        <Precios />
      </Link>
        <h1>Movie Tickets</h1>
        <Link to="./componentes/Login.jsx">
          <User />
        </Link>
      </div>
      <Buscador
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="h2-titles">
        <h2>Películas en tendencia</h2>
        <Link to="/PantallaAsientos"><button>Ver más</button></Link>
      </div>
      <div className="contenedor-peliculas-carrousel">
        <div className="peliculas-carrousel">
            {carteleraTotal.map(pelicula => (
              <Pelicula
               key={pelicula.title}             
               title={pelicula.title}
               language={pelicula.language}
               category={pelicula.genre}
               img={pelicula.image} 
               />
            ))}

        </div>
      </div>

      
      {/* 
      * Funcionalitat a fer més edevant. Crear un criteri i un filtre per els pelicules en tendència.
      <div className="h2-titles">
        <h2>Peliculas nuevas</h2>
        <BotonMas />
      </div>
      <div className="contenedor-peliculas-carrousel">
        <div className="peliculas-carrousel">
        {cartelera.map(pelicula => (
              <Pelicula
               key={pelicula.image}             
               title={pelicula.title}
               language={pelicula.language}
               category={pelicula.genre}
               img={pelicula.image} 
               />
            ))}
        </div>
      </div> 
      */}

      
    </div>
  );
}

export default Home;
