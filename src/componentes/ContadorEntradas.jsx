import "../hojas-de-estilo/ContadorEntradas.css";

function ContadorEntradas({contador, manejarSuma, manejarResta}) {
<div className="contador-entradas">
        <div className="contador-adultos">
            <div onClick={manejarSuma}>+</div>
            <p>{contador} Adultos</p>
            <div onClick={manejarResta}>-</div>
        </div>
      </div>
}

export default ContadorEntradas;