import React from "react";
import { Route, Routes  } from "react-router-dom";
import PantallaAsientos from './PantallaAsientos';
import Home from "./Home";
import './App.css';

function App() {
  return (
      <div className="App">
      {/* Aquí colocaremos todas nuestras pantallas, que estarán metidas dentro de un componente y listadas como rutas.
      Será como un índice de todas nuestras páginas */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PantallaAsientos" element={<PantallaAsientos />} />
      </Routes>
       
      </div>
       

  );
}

export default App;
