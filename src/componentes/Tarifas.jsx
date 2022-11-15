import React from "react";
import {Link} from "react-router-dom";
import { FlechaAtras } from "./Iconos";
import "../hojas-de-estilo/Tarifas.css";

function Tarifas() {
  return (
    <>
      <div className="container">
        <div className="contenedor-tarifas">
          <Link to="/">
            <FlechaAtras />
          </Link>
          <div className="tabla-tarifas">
            <h1>Precios entrada cine</h1>
            <table>
              <caption className="hidden">
                Lista de precios
              </caption>
              <thead>
                <tr>
                  <th scope="col">Día de la semana</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lunes</td>
                  <td>6€</td>
                </tr>
                <tr>
                  <td>Martes</td>
                  <td>6€</td>
                </tr>
                <tr>
                  <td>Miércoles</td>
                  <td>4.5€</td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td>6€</td>
                </tr>
                <tr>
                  <td>Viernes</td>
                  <td>8€</td>
                </tr>
                <tr>
                  <td>Sábado</td>
                  <td>8€</td>
                </tr>
                <tr>
                  <td>Domingo</td>
                  <td>8€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>

  );
}

export default Tarifas;