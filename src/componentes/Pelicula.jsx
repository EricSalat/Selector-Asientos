import React from "react";
import "../hojas-de-estilo/Pelicula.css";

function Pelicula(props) {
    return(
        <div className="peliculas-contenedor">
            <img
                src={require(`../imagenes/${props.img}.jpg`)}
                alt={props.title}
                width="150"
                height="200" />
            <h3>{props.title}</h3>
            <div className="informacion">
                <p className ="idioma-pelicula">{props.language} </p>
                <p>{props.category}</p>
            </div>
        </div> 
    );
}

export default Pelicula;