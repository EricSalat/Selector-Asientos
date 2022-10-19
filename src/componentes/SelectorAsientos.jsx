import React, { useState } from "react";
import "../hojas-de-estilo/SelectorAsientos.css";
import ContadorEntradas from "./ContadorEntradas";


function SelectorAsientos() {
  
  let [contador, setContador] = useState(0);

  let sumarEntrada = () => {
    setContador(contador + 1)
}

  let restarEntrada = () => {
    if (contador <= 0) {
      setContador(0)
    } else {
      setContador(contador - 1)
    }
  }

  let precio = contador * 8;
  
  return (
    <div className="app-asientos">
      <div className="container">
          <h1>Cinema Royal Light</h1>
          <p className="subtitulo">Elige tus asientos</p>
          <div className="asientos-contenedor">
            <div className="asientos-izquierda">
              <div className="asiento" id="1"></div>
              <div className="asiento" id="2"></div>
              <div className="asiento" id="3"></div>
              <div className="asiento" id="4"></div>
              <div className="asiento" id="5"></div>
              <div className="asiento" id="6"></div>
              <div className="asiento" id="7"></div>
              <div className="asiento" id="8"></div>
              <div className="asiento" id="9"></div>
              <div className="asiento asiento-ocupado" id="10"></div>
              <div className="asiento asiento-ocupado" id="11"></div>
              <div className="asiento asiento-ocupado" id="12"></div>
              <div className="asiento" id="13"></div>
              <div className="asiento" id="14"></div>
              <div className="asiento" id="15"></div>
              <div className="asiento" id="16"></div>
              <div className="asiento" id="17"></div>
              <div className="asiento" id="18"></div>
              <div className="asiento" id="19"></div>
              <div className="asiento" id="20"></div>
              <div className="asiento asiento-ocupado" id="21"></div>
              <div className="asiento asiento-ocupado" id="22"></div>
              <div className="asiento" id="23"></div>
              <div className="asiento" id="24"></div>
              <div className="asiento" id="25"></div>
              <div className="asiento" id="26"></div>
              <div className="asiento" id="27"></div>
              <div className="asiento" id="28"></div>
              <div className="asiento" id="29"></div>
              <div className="asiento" id="30"></div>
            </div>
            <div className="asientos-centro">
              <div className="asiento" id="32"></div>
              <div className="asiento" id="33"></div>
              <div className="asiento" id="34"></div>
              <div className="asiento" id="35"></div>
              <div className="asiento" id="36"></div>
              <div className="asiento" id="37"></div>
              <div className="asiento" id="38"></div>
              <div className="asiento" id="39"></div>
              <div className="asiento" id="40"></div>
              <div className="asiento" id="41"></div>
              <div className="asiento" id="41"></div>
              <div className="asiento" id="43"></div>
              <div className="asiento" id="44"></div>
              <div className="asiento" id="45"></div>
              <div className="asiento" id="46"></div>
              <div className="asiento" id="47"></div>
              <div className="asiento" id="48"></div>
              <div className="asiento" id="49"></div>
              <div className="asiento" id="50"></div>
              <div className="asiento" id="51"></div>
              <div className="asiento" id="52"></div>
              <div className="asiento asiento-seleccionado" id="53"></div>
              <div className="asiento asiento-seleccionado" id="54"></div>
              <div className="asiento asiento-seleccionado" id="55"></div>
              <div className="asiento" id="56"></div>
              <div className="asiento" id="57"></div>
              <div className="asiento" id="58"></div>
              <div className="asiento" id="59"></div>
              <div className="asiento" id="60"></div>
              <div className="asiento" id="61"></div>
              <div className="asiento" id="62"></div>
              <div className="asiento" id="63"></div>
              <div className="asiento" id="64"></div>
              <div className="asiento" id="65"></div>
              <div className="asiento" id="66"></div>
              <div className="asiento" id="67"></div>
              <div className="asiento" id="68"></div>
              <div className="asiento" id="69"></div>
              <div className="asiento" id="71"></div>
              <div className="asiento" id="72"></div>
              <div className="asiento" id="73"></div>
              <div className="asiento" id="74"></div>
              <div className="asiento" id="75"></div>
              <div className="asiento" id="76"></div>
              <div className="asiento" id="77"></div>
              <div className="asiento" id="78"></div>
              <div className="asiento" id="79"></div>
              <div className="asiento" id="80"></div>
              <div className="asiento" id="81"></div>
              <div className="asiento" id="82"></div>
            </div>
            <div className="asientos-derecha">
              <div className="asiento" id="1"></div>
              <div className="asiento" id="83"></div>
              <div className="asiento" id="84"></div>
              <div className="asiento" id="85"></div>
              <div className="asiento" id="86"></div>
              <div className="asiento" id="87"></div>
              <div className="asiento" id="88"></div>
              <div className="asiento" id="89"></div>
              <div className="asiento" id="90"></div>
              <div className="asiento" id="91"></div>
              <div className="asiento" id="92"></div>
              <div className="asiento" id="93"></div>
              <div className="asiento" id="94"></div>
              <div className="asiento" id="95"></div>
              <div className="asiento" id="96"></div>
              <div className="asiento" id="97"></div>
              <div className="asiento asiento-ocupado" id="98"></div>
              <div className="asiento asiento-ocupado" id="99"></div>
              <div className="asiento" id="100"></div>
              <div className="asiento" id="101"></div>
              <div className="asiento" id="102"></div>
              <div className="asiento" id="103"></div>
              <div className="asiento" id="104"></div>
              <div className="asiento" id="105"></div>
              <div className="asiento" id="106"></div>
              <div className="asiento" id="107"></div>
              <div className="asiento" id="108"></div>
              <div className="asiento" id="109"></div>
              <div className="asiento" id="110"></div>
              <div className="asiento" id="111"></div>
            </div>
          </div>
          <div className="asientos-leyenda">
            <div className="contenedor-leyenda">
              <div className="circulo reservado"></div>
              <p>Ocupado</p>
            </div>
            <div className="contenedor-leyenda">
              <div className="circulo seleccionado"></div>
              <p>Seleccionado</p>
            </div>
            <div className="contenedor-leyenda">
              <div className="circulo disponible"></div>
              <p>Disponible</p>
            </div>
          </div>
      </div>
      <ContadorEntradas
        gestionarSuma={sumarEntrada}
        gestionarResta={restarEntrada}
        contador={contador}
        precioTotal={precio}
       />  
    </div> 
  );
}

export default SelectorAsientos;
