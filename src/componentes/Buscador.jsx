import React from "react";
import "../hojas-de-estilo/Buscador.css";

function Buscador({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
  
    return(
            <div className="buscador">
                <input 
                    placeholder="Busca una pelicula"
                    value={searchValue}
                    onChange={onSearchValueChange}
                    >
                </input>
                <p>{searchValue}</p>
            </div>
        
    );
}

export default Buscador;