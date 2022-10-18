import { HiPlus, HiMinus } from "react-icons/hi";
import "../hojas-de-estilo/ContadorEntradas.css";

function ContadorEntradas({ contador, gestionarSuma, gestionarResta, precioTotal }) {
  
  return (
    <div>
      <div className="contador-entradas">
        <div className="contador-adultos">
          <button onClick={gestionarSuma}>
            <HiPlus className="contador-iconos" />
          </button>
          <p>{contador} Entradas</p>
          <button onClick={gestionarResta}>
           <HiMinus className="contador-iconos"/>
          </button>
        </div>
        {/* <div className="contador-niños">
          <button onClick={gestionarSuma}>
            <HiPlus className="contador-iconos" />
          </button>
          <p>{contador} Niños</p>
          <button onClick={gestionarResta}>
           <HiMinus className="contador-iconos"/>
          </button>
        </div> */}
      </div>
        <div className="boton-compra">Total ({precioTotal})€ </div>
    </div>
  );
}

export default ContadorEntradas;
