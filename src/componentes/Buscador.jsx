import React from "react";
import "../hojas-de-estilo/Buscador.css";

function Buscador() {

 window.addEventListener("load", () => {   
        const buscador = document.querySelector("#buscador");
        const enviarBusqueda = document.querySelector("#boton-busqueda");

        function filtrar() {
            console.log(buscador.value);
        }
    
        enviarBusqueda.addEventListener("click", filtrar);
    })   

  
    return(
        <>
        {/* <form action="#"> */}
            <input type="text" name="pelicula" id="buscador" placeholder="Busca una pelicula"></input>
            <input type="submit" id="boton-busqueda"></input>
        {/* </form>  */}
        </>
        
    );
}

export default Buscador;